import { Component, OnInit } from '@angular/core';
import {
  AlertController,
  ModalController,
  ToastController,
} from '@ionic/angular';
import { CrudService } from 'src/app/services/api/crud.service';

@Component({
  selector: 'app-create-language-modal',
  templateUrl: './create-language-modal.component.html',
  styleUrls: ['./create-language-modal.component.scss'],
})
export class CreateLanguageModalComponent implements OnInit {
  constructor(
    private modalCtrl: ModalController,
    private crudService: CrudService,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}
  idiomaInput;
  nivelInput;
  ngOnInit() {}
  dismissModal() {
    this.modalCtrl.dismiss();
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
      message: 'Idioma criado com sucesso',
      duration: 2000,
      position: position,
    });

    await toast.present();
  }
  newIdioma() {
    if (this.idiomaInput && this.nivelInput) {
      const newIdiomaData = {
        idioma: this.idiomaInput,
        nivel: this.nivelInput,
      };
      console.log(newIdiomaData);
      this.crudService.create('newIdioma', newIdiomaData).subscribe((res) => {
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
