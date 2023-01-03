import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-skills-modal',
  templateUrl: './create-skills-modal.component.html',
  styleUrls: ['./create-skills-modal.component.scss'],
})
export class CreateSkillsModalComponent implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}
  dismissModal() {
    this.modalCtrl.dismiss();
  }
}
