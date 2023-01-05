import { Component, OnInit } from '@angular/core';
import {
  AlertController,
  ModalController,
  ToastController,
} from '@ionic/angular';
import { CrudService } from 'src/app/services/api/crud.service';

@Component({
  selector: 'app-project-settings',
  templateUrl: './project-settings.component.html',
  styleUrls: ['./project-settings.component.scss'],
})
export class ProjectSettingsComponent implements OnInit {
  item;
  titleInput;
  descInput;
  toggleInput;
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
      message: 'Projeto editado com sucesso',
      duration: 2000,
      position: position,
    });

    await toast.present();
  }
  dismissModal() {
    this.modalCtrl.dismiss();
  }
  updateProject() {
    if (this.titleInput && this.descInput) {
      const updatedProjectData = {
        titulo: this.titleInput,
        desc: this.descInput,
        hidden: this.toggleInput,
      };
      console.log(updatedProjectData);
      console.log(this.item.id);
      this.crudService
        .update('updateProject', this.item.id, updatedProjectData)
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
