import { Component, OnInit } from '@angular/core';
import {
  AlertController,
  ModalController,
  ToastController,
} from '@ionic/angular';
import { CrudService } from 'src/app/services/api/crud.service';

@Component({
  selector: 'app-hab-pr-settings',
  templateUrl: './hab-pr-settings.component.html',
  styleUrls: ['./hab-pr-settings.component.scss'],
})
export class HabPrSettingsComponent implements OnInit {
  item;
  titleInput;
  descInput;
  toggleInput;
  tempoInput;

  constructor(
    private modalCtrl: ModalController,
    private crudService: CrudService,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.item;
    console.log(this.item);
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
      message: 'Habilitação Profissional editada com sucesso',
      duration: 2000,
      position: position,
    });

    await toast.present();
  }
  dismissModal() {
    this.modalCtrl.dismiss();
  }
  updateHabPr() {
    if (this.titleInput || this.descInput) {
      const updatedHabPrData = {
        titulo: this.titleInput,
        desc: this.descInput,
        tempo: this.tempoInput,
        hidden: !this.toggleInput,
      };
      console.log(updatedHabPrData);
      console.log(this.item.id);
      this.crudService
        .update('updateHabPr', this.item.id, updatedHabPrData)
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
