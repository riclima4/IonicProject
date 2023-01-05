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
    this.loadHabAc();
    this.loadHabPr();
    this.loadIdiomas();
    this.loadProjects();
    this.getProgrammingLang();
    this.loaded = true;
  }

  async ionViewWillEnter() {
    this.loadHabAc();
    this.loadHabPr();
    this.loadIdiomas();
    this.loadProjects();
    this.getProgrammingLang();
    this.isChecked =
      (await Preferences.get({ key: 'darkmode' })).value === 'true';
    console.log(this.isChecked);
  }
  async ionViewWillLeave() {
    this.isChecked =
      (await Preferences.get({ key: 'darkmode' })).value === 'true';
    console.log(this.isChecked);
  }
  //blob to url
  // blobToUrl(image) {
  //   var blob = new Blob(image.data, { type: image.type });
  //   const imgUrl = URL.createObjectURL(blob);
  //   console.log(imgUrl);
  //   return imgUrl;
  // }
  //Load Habilitações Académicas
  async loadHabAc() {
    const loading = await this.loadingCtrl.create({
      spinner: 'bubbles',
    });
    await loading.present();
    this.crudService.getHabAc('habAc').subscribe((res) => {
      loading.dismiss();

      this.habAc = [...res.habA];
      // console.log(res);
    });
  }
  //Load Habilitações Profissionais
  async loadHabPr() {
    const loading = await this.loadingCtrl.create({
      spinner: 'bubbles',
    });
    await loading.present();
    this.crudService.getHabPr('habPr').subscribe((res) => {
      loading.dismiss();
      this.habPr = [...res.habP];
      // console.log(res);
    });
  }
  //Load idiomas
  async loadIdiomas() {
    const loading = await this.loadingCtrl.create({
      spinner: 'bubbles',
    });
    await loading.present();
    this.crudService.getIdiomas('idiomas').subscribe((res) => {
      loading.dismiss();
      this.idiomas = [...res.idiomas];
      // console.log(res);
    });
  }
  //Load Projetos
  async loadProjects() {
    const loading = await this.loadingCtrl.create({
      spinner: 'bubbles',
    });
    await loading.present();
    this.crudService.getProjects('projects').subscribe((res) => {
      loading.dismiss();
      this.projetos = [...res.projetos];
      // console.log(res);
    });
  }
  //Load Programming Lang
  async getProgrammingLang() {
    const loading = await this.loadingCtrl.create({
      spinner: 'bubbles',
    });
    await loading.present();
    this.crudService.getProgrammingLang('programmingLang').subscribe((res) => {
      loading.dismiss();
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
