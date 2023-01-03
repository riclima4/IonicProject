import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-projects-modal',
  templateUrl: './create-projects-modal.component.html',
  styleUrls: ['./create-projects-modal.component.scss'],
})
export class CreateProjectsModalComponent implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}
  dismissModal() {
    this.modalCtrl.dismiss();
  }
}
