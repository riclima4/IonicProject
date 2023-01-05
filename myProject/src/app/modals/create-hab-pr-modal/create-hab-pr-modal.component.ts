import { Component, OnInit } from '@angular/core';
import {
  AlertController,
  ModalController,
  ToastController,
} from '@ionic/angular';
import { CrudService } from 'src/app/services/api/crud.service';

@Component({
  selector: 'app-create-hab-pr-modal',
  templateUrl: './create-hab-pr-modal.component.html',
  styleUrls: ['./create-hab-pr-modal.component.scss'],
})
export class CreateHabPrModalComponent implements OnInit {
  titleInput;
  descInput;
  tempoInput;
  toggleInput;
  constructor(
    private modalCtrl: ModalController,
    private crudService: CrudService,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

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
      message: 'Habilitação Profissional criada com sucesso',
      duration: 2000,
      position: position,
    });

    await toast.present();
  }
  newHabPr() {
    if (this.titleInput || this.descInput) {
      const newHabPrData = {
        titulo: this.titleInput,
        desc: this.descInput,
        tempo: this.tempoInput,
        hidden: !this.toggleInput,
      };
      console.log(newHabPrData);
      this.crudService.create('newHabPr', newHabPrData).subscribe((res) => {
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
