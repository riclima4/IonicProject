import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CrudService } from 'src/app/services/api/crud.service';

@Component({
  selector: 'app-create-projects-modal',
  templateUrl: './create-projects-modal.component.html',
  styleUrls: ['./create-projects-modal.component.scss'],
})
export class CreateProjectsModalComponent implements OnInit {
  titleInput;
  descInput;
  constructor(
    private modalCtrl: ModalController,
    private crudService: CrudService
  ) {}

  ngOnInit() {}
  dismissModal() {
    this.modalCtrl.dismiss();
  }
  newProject() {
    const title = this.titleInput;
    const desc = this.descInput;
    const newProjectData = {
      title: title,
      desc: desc,
    };
    console.log(newProjectData);
    this.crudService.create('newProject', newProjectData).subscribe((res) => {
      console.log(res);
    });
  }
}
