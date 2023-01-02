import { Component } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import {
  LoadingController,
  ModalController,
  ToastController,
} from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
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
  segmentChanged(event: any) {
    console.log(event.target.value);
    this.selectedSegment = event.target.value;
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
}
