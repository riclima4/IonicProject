import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-hab-ac-modal',
  templateUrl: './create-hab-ac-modal.component.html',
  styleUrls: ['./create-hab-ac-modal.component.scss'],
})
export class CreateHabAcModalComponent implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  dismissModal() {
    this.modalCtrl.dismiss();
  }
}
