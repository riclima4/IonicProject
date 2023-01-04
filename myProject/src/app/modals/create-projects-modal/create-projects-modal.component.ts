import { Component, OnInit } from '@angular/core';
import {
  AlertController,
  ModalController,
  ToastController,
} from '@ionic/angular';
import { CrudService } from 'src/app/services/api/crud.service';

@Component({
  selector: 'app-create-projects-modal',
  templateUrl: './create-projects-modal.component.html',
  styleUrls: ['./create-projects-modal.component.scss'],
})
export class CreateProjectsModalComponent implements OnInit {
  titleInput;
  descInput;
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
      message: 'Projeto Criado com sucesso',
      duration: 2000,
      position: position,
    });

    await toast.present();
  }
  newProject() {
    if (this.titleInput || this.descInput) {
      const newProjectData = {
        titulo: this.titleInput,
        desc: this.descInput,
      };
      console.log(newProjectData);
      this.crudService.create('newProject', newProjectData).subscribe((res) => {
        console.log(res);
      });
      this.dismissModal();
      setTimeout(() => {
        this.presentToast('top');
      }, 2500);
    } else {
      this.dismissModal();
      this.presentAlert();
    }
  }
}
