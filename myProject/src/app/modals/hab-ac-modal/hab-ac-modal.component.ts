import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-hab-ac-modal',
  templateUrl: './hab-ac-modal.component.html',
  styleUrls: ['./hab-ac-modal.component.scss'],
})
export class HabAcModalComponent implements OnInit {
  todos;
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    this.todos;
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }
}
