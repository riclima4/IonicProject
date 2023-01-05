import { Component, OnInit } from '@angular/core';
import {
  AlertController,
  ModalController,
  ToastController,
} from '@ionic/angular';
import { CrudService } from 'src/app/services/api/crud.service';

@Component({
  selector: 'app-hab-ac-settings',
  templateUrl: './hab-ac-settings.component.html',
  styleUrls: ['./hab-ac-settings.component.scss'],
})
export class HabAcSettingsComponent implements OnInit {
  item;
  titleInput;
  descInput;
  toggleInput;
  nivelInput;
  constructor(
    private modalCtrl: ModalController,
    private crudService: CrudService,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.item;
    // console.log(this.item);
    this.titleInput = this.item.titulo;
    this.descInput = this.item.desc;
    this.toggleInput = this.item.hidden;
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
      message: 'Habilitação Académica editada com sucesso',
      duration: 2000,
      position: position,
    });

    await toast.present();
  }
  dismissModal() {
    this.modalCtrl.dismiss();
  }
  updateHabAc() {
    if (this.titleInput && this.descInput) {
      const updatedHabAcData = {
        titulo: this.titleInput,
        desc: this.descInput,
        nivel: this.nivelInput,
        hidden: this.toggleInput,
      };
      console.log(updatedHabAcData);
      console.log(this.item.id);
      this.crudService
        .update('updateHabAc', this.item.id, updatedHabAcData)
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
