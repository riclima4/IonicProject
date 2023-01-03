import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-hab-pr-modal',
  templateUrl: './create-hab-pr-modal.component.html',
  styleUrls: ['./create-hab-pr-modal.component.scss'],
})
export class CreateHabPrModalComponent implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  dismissModal() {
    this.modalCtrl.dismiss();
  }
}
