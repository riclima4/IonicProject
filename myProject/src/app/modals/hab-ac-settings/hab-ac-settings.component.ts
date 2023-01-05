import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-hab-ac-settings',
  templateUrl: './hab-ac-settings.component.html',
  styleUrls: ['./hab-ac-settings.component.scss'],
})
export class HabAcSettingsComponent implements OnInit {
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
