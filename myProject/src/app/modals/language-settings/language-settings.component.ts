import { Component, OnInit } from '@angular/core';
import {
  AlertController,
  ModalController,
  ToastController,
} from '@ionic/angular';
import { CrudService } from 'src/app/services/api/crud.service';

@Component({
  selector: 'app-language-settings',
  templateUrl: './language-settings.component.html',
  styleUrls: ['./language-settings.component.scss'],
})
export class LanguageSettingsComponent implements OnInit {
  constructor(
    private modalCtrl: ModalController,
    private crudService: CrudService,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}
  item;
  idiomaInput;
  nivelInput;
  ngOnInit() {
    this.item;
    this.idiomaInput = this.item.idioma;
    this.nivelInput = this.item.nivel;
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Erro',
      subHeader: 'Dados Inválidos',
      mode: 'ios',
      buttons: ['OK'],
    });

    await alert.present();
  }
  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Idioma editado com sucesso',
      duration: 2000,
      position: position,
    });

    await toast.present();
  }
  dismissModal() {
    this.modalCtrl.dismiss();
  }
  updateIdioma() {
    if (this.idiomaInput) {
      const updatedIdiomaData = {
        idioma: this.idiomaInput,
        nivel: this.nivelInput,
      };
      console.log(updatedIdiomaData);
      console.log(this.item.id);
      this.crudService
        .update('updateIdioma', this.item.id, updatedIdiomaData)
        .subscribe((res) => {
          console.log(res);
        });
      this.dismissModal();
      setTimeout(() => {
        this.presentToast('top');
      }, 2500);
    } else {
      this.dismissModal();
      setTimeout(() => {
        this.presentAlert();
      }, 2500);
    }
  }
}
