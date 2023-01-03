import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Preferences } from '@capacitor/preferences';
import {
  LoadingController,
  ModalController,
  ToastController,
} from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { CreateHabAcModalComponent } from '../modals/create-hab-ac-modal/create-hab-ac-modal.component';
import { CreateHabPrModalComponent } from '../modals/create-hab-pr-modal/create-hab-pr-modal.component';
import { CreateLanguageModalComponent } from '../modals/create-language-modal/create-language-modal.component';
import { CreateProjectsModalComponent } from '../modals/create-projects-modal/create-projects-modal.component';
import { CreateSkillsModalComponent } from '../modals/create-skills-modal/create-skills-modal.component';
import { HabAcSettingsComponent } from '../modals/hab-ac-settings/hab-ac-settings.component';
import { HabPrSettingsComponent } from '../modals/hab-pr-settings/hab-pr-settings.component';
import { CrudService } from '../services/api/crud.service';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
})
export class Tab4Page {
  darkModeIcon: string = 'moon';
  selectedSegment: string = 'habAc';
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
  isChecked: boolean = false;
  async ionViewWillEnter() {
    this.isChecked =
      (await Preferences.get({ key: 'darkmode' })).value === 'true';
  }
  async ionViewWillLeave() {
    this.isChecked =
      (await Preferences.get({ key: 'darkmode' })).value === 'true';
  }
  segmentChanged(event: any) {
    console.log(event.target.value);
    this.selectedSegment = event.target.value;
  }
  ngOnInit() {
    this.loadHabPr();
    this.loadHabAc();
    this.loadIdiomas();
    this.loadProjects();
    this.getProgrammingLang();
  }
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
  async openModalAcademicSettings(item) {
    console.log(item);
    const modalProjects = await this.modalCtrl.create({
      component: HabAcSettingsComponent,
      componentProps: {
        item: item,
      },
    });
    await modalProjects.present();
  }
  async openModalProfessionalSettings(item) {
    console.log(item);
    const modalProjects = await this.modalCtrl.create({
      component: HabPrSettingsComponent,
      componentProps: {
        item: item,
      },
    });
    await modalProjects.present();
  }
  async openModalCreateHabAc() {
    const modalProjects = await this.modalCtrl.create({
      component: CreateHabAcModalComponent,
    });
    await modalProjects.present();
  }
  async openModalCreateHabPr() {
    const modalProjects = await this.modalCtrl.create({
      component: CreateHabPrModalComponent,
    });
    await modalProjects.present();
  }
  async openModalCreateLang() {
    const modalProjects = await this.modalCtrl.create({
      component: CreateLanguageModalComponent,
    });
    await modalProjects.present();
  }
  async openModalCreateSkills() {
    const modalProjects = await this.modalCtrl.create({
      component: CreateSkillsModalComponent,
    });
    await modalProjects.present();
  }
  async openModalCreateProjects() {
    const modalProjects = await this.modalCtrl.create({
      component: CreateProjectsModalComponent,
    });
    await modalProjects.present();
  }
}
