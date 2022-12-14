import { Component, OnInit } from '@angular/core';
import {
  AlertController,
  ModalController,
  ToastController,
} from '@ionic/angular';
import { CrudService } from 'src/app/services/api/crud.service';

@Component({
  selector: 'app-create-hab-ac-modal',
  templateUrl: './create-hab-ac-modal.component.html',
  styleUrls: ['./create-hab-ac-modal.component.scss'],
})
export class CreateHabAcModalComponent implements OnInit {
  constructor(
    private modalCtrl: ModalController,
    private crudService: CrudService,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}
  titleInput;
  descInput;
  nivelInput;
  toggleInput;
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
      message: 'Habilitação Académica criada com sucesso',
      duration: 2000,
      position: position,
    });

    await toast.present();
  }
  newHabAc() {
    if (this.titleInput && this.descInput) {
      const newHabAcData = {
        titulo: this.titleInput,
        desc: this.descInput,
        nivel: this.nivelInput,
        hidden: this.toggleInput,
      };
      console.log(newHabAcData);
      this.crudService.create('newHabAc', newHabAcData).subscribe((res) => {
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
