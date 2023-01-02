import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-hab-pr-modal',
  templateUrl: './hab-pr-modal.component.html',
  styleUrls: ['./hab-pr-modal.component.scss'],
})
export class HabPrModalComponent implements OnInit {
  todos;
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    this.todos;
  }
  dismissModal() {
    this.modalCtrl.dismiss();
  }
}
