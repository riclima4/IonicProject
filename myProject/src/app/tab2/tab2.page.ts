import { Component } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import {
  LoadingController,
  ModalController,
  ToastController,
} from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { HabAcModalComponent } from '../modals/hab-ac-modal/hab-ac-modal.component';
import { ProjectModalComponentComponent } from '../modals/project-modal-component/project-modal-component.component';
import { CrudService } from '../services/api/crud.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  darkModeIcon: string = 'moon';
  presentingElement = null;
  habAc = [];
  habPr = [];
  idiomas = [];
  projetos = [];
  programmingLang = [];

  constructor(
    private translateService: TranslateService,
    private toastController: ToastController,
    private crudService: CrudService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    console.log(document.body.attributes);
    this.loadHabAc();
    this.loadHabPr();
    this.loadIdiomas();
    this.loadProjects();
    this.getProgrammingLang();
    this.presentingElement = document.querySelector('.ion-page');
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
      this.habAc = [...this.habAc, ...res.habA];
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
      this.habPr = [...this.habPr, ...res.habP];
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
      this.idiomas = [...this.idiomas, ...res.idiomas];
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
      this.projetos = [...this.projetos, ...res.projetos];
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
      this.programmingLang = [...this.programmingLang, ...res.progLang];
      // console.log(res);
    });
  }
  //Change Idioma
  async changeLanguage(language: string) {
    await Preferences.set({ key: 'user-lang', value: language });
    await this.showToast();
  }

  async showToast() {
    const toast = await this.toastController.create({
      message: this.translateService.instant('Language Changed'),
      duration: 4000,
    });
    await toast.present();
  }
  ngAfterViewInit() {
    console.log(document.body.attributes.length);
  }
  toggleTheme(event: any) {
    if (event) {
      if (document.body.attributes.length == 1) {
        document.body.setAttribute('color-theme', 'dark');
        this.darkModeIcon = this.darkModeIcon === 'moon' ? 'sunny' : 'moon';
      } else {
        document.body.removeAttribute('color-theme');
        this.darkModeIcon = this.darkModeIcon === 'moon' ? 'sunny' : 'moon';
      }
    }
    console.log(document.body.attributes.length);
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
