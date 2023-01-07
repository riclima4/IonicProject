import { Component } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { LoadingController, ModalController } from '@ionic/angular';
import { HabAcModalComponent } from '../modals/hab-ac-modal/hab-ac-modal.component';
import { HabPrModalComponent } from '../modals/hab-pr-modal/hab-pr-modal.component';
import { ProjectModalComponentComponent } from '../modals/project-modal-component/project-modal-component.component';
import { CrudService } from '../services/api/crud.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  habAc = [];
  habPr = [];
  idiomas = [];
  projetos = [];
  programmingLang = [];
  public loaded = false;
  isChecked: boolean = false;

  constructor(
    private crudService: CrudService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.loadingSpinner();
    setTimeout(() => {
      this.loadHabAc();
      this.loadHabPr();
      this.loadIdiomas();
      this.loadProjects();
      this.getProgrammingLang();
      this.loaded = true;
    }, 2000);
  }

  async ionViewWillEnter() {
    this.loadingSpinner();
    setTimeout(() => {
      this.loadHabAc();
      this.loadHabPr();
      this.loadIdiomas();
      this.loadProjects();
      this.getProgrammingLang();
      this.loaded = true;
    }, 2000);
    this.isChecked =
      (await Preferences.get({ key: 'darkmode' })).value === 'true';
    console.log(this.isChecked);
  }
  async ionViewWillLeave() {
    this.isChecked =
      (await Preferences.get({ key: 'darkmode' })).value === 'true';
    console.log(this.isChecked);
  }
  async loadingSpinner() {
    const loading = await this.loadingCtrl.create({
      spinner: 'crescent',
      mode: 'ios',
    });
    this.loaded = false;
    await loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  //Load Habilitações Académicas
  async loadHabAc() {
    this.crudService.getHabAc('habAc').subscribe((res) => {
      this.habAc = [...res.habA];
      // console.log(res);
    });
  }
  //Load Habilitações Profissionais
  async loadHabPr() {
    this.crudService.getHabPr('habPr').subscribe((res) => {
      this.habPr = [...res.habP];
      // console.log(res);
    });
  }
  //Load idiomas
  async loadIdiomas() {
    this.crudService.getIdiomas('idiomas').subscribe((res) => {
      this.idiomas = [...res.idiomas];
      // console.log(res);
    });
  }
  //Load Projetos
  async loadProjects() {
    this.crudService.getProjects('projects').subscribe((res) => {
      this.projetos = [...res.projetos];
      // console.log(res);
    });
  }
  //Load Programming Lang
  async getProgrammingLang() {
    this.crudService.getProgrammingLang('programmingLang').subscribe((res) => {
      this.programmingLang = [...res.progLang];
      // console.log(res);
    });
  }
  async openModalAcademic(itens) {
    console.log(itens);
    const modalProjects = await this.modalCtrl.create({
      component: HabAcModalComponent,
      componentProps: {
        todos: itens,
      },
    });
    await modalProjects.present();
  }
  async openModalProf(itens) {
    console.log(itens);
    const modalProjects = await this.modalCtrl.create({
      component: HabPrModalComponent,
      componentProps: {
        todos: itens,
      },
    });
    await modalProjects.present();
  }
  async openModalProjeto(item) {
    console.log(item);
    const modalProjects = await this.modalCtrl.create({
      component: ProjectModalComponentComponent,
      componentProps: {
        id: item.id,
        titulo: item.titulo,
        desc: item.desc,
      },
    });
    await modalProjects.present();
  }
}
