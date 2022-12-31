import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-project-modal-component',
  templateUrl: './project-modal-component.component.html',
  styleUrls: ['./project-modal-component.component.scss'],
})
export class ProjectModalComponentComponent implements OnInit {
  id;
  titulo;
  desc;
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    // console.log(`${this.titulo}`);
    this.titulo;
    this.desc;
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }
}
