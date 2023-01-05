import { Component, OnInit } from '@angular/core';
import {
  AlertController,
  ModalController,
  ToastController,
} from '@ionic/angular';
import { CrudService } from 'src/app/services/api/crud.service';

@Component({
  selector: 'app-create-skills-modal',
  templateUrl: './create-skills-modal.component.html',
  styleUrls: ['./create-skills-modal.component.scss'],
})
export class CreateSkillsModalComponent implements OnInit {
  nomeInput;
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
      message: 'Skill criada com sucesso',
      duration: 2000,
      position: position,
    });

    await toast.present();
  }
  newSkill() {
    if (this.nomeInput) {
      const newSkillData = {
        nome: this.nomeInput,
      };
      console.log(newSkillData);
      this.crudService.create('newSkill', newSkillData).subscribe((res) => {
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
