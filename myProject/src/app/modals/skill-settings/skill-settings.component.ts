import { Component, OnInit } from '@angular/core';
import {
  AlertController,
  ModalController,
  ToastController,
} from '@ionic/angular';
import { CrudService } from 'src/app/services/api/crud.service';

@Component({
  selector: 'app-skill-settings',
  templateUrl: './skill-settings.component.html',
  styleUrls: ['./skill-settings.component.scss'],
})
export class SkillSettingsComponent implements OnInit {
  item;
  nomeInput;

  constructor(
    private modalCtrl: ModalController,
    private crudService: CrudService,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.item;
    this.nomeInput = this.item.nome;
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
      message: 'Skill editada com sucesso',
      duration: 2000,
      position: position,
    });

    await toast.present();
  }
  dismissModal() {
    this.modalCtrl.dismiss();
  }
  updateSkill() {
    if (this.nomeInput) {
      const updatedSkillData = {
        nome: this.nomeInput,
      };
      console.log(updatedSkillData);
      console.log(this.item.id);
      this.crudService
        .update('updateSkill', this.item.id, updatedSkillData)
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
