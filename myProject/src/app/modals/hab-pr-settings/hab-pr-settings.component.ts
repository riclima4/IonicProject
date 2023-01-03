import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-hab-pr-settings',
  templateUrl: './hab-pr-settings.component.html',
  styleUrls: ['./hab-pr-settings.component.scss'],
})
export class HabPrSettingsComponent implements OnInit {
  showEdit = false;
  item;
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    this.item;
    console.log(this.item);
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }
}
