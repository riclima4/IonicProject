import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-language-modal',
  templateUrl: './create-language-modal.component.html',
  styleUrls: ['./create-language-modal.component.scss'],
})
export class CreateLanguageModalComponent implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}
  dismissModal() {
    this.modalCtrl.dismiss();
  }
}
