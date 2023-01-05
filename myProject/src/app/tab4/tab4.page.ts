import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Preferences } from '@capacitor/preferences';
import {
  ActionSheetController,
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
import { ProjectSettingsComponent } from '../modals/project-settings/project-settings.component';
import { SkillSettingsComponent } from '../modals/skill-settings/skill-settings.component';
import { CrudService } from '../services/api/crud.service';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
})
export class Tab4Page {
  // darkModeIcon: string = 'moon';
  selectedSegment: string = 'habAc';
  habAc = [];
  habPr = [];
  idiomas = [];
  projetos = [];
  programmingLang = [];

  constructor(
    // private translateService: TranslateService,
    private toastController: ToastController,
    private crudService: CrudService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController
  ) {}
  isChecked: boolean = false;
  ngOnInit() {
    this.loadHabPr();
    this.loadHabAc();
    this.loadIdiomas();
    this.loadProjects();
    this.loadSkill();
  }
  async ionViewWillEnter() {
    this.isChecked =
      (await Preferences.get({ key: 'darkmode' })).value === 'true';
  }
  async ionViewWillLeave() {
    this.isChecked =
      (await Preferences.get({ key: 'darkmode' })).value === 'true';
  }
  async loadingSpinner() {
    const loading = await this.loadingCtrl.create({
      spinner: 'crescent',
      mode: 'ios',
    });
    await loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  segmentChanged(event: any) {
    this.selectedSegment = event.target.value;
  }
  handleRefresh(event) {
    setTimeout(() => {
      location.reload();
      event.target.complete();
    }, 2000);
  }
  async presentToastDelete(
    position: 'top' | 'middle' | 'bottom',
    nome:
      | 'Projeto'
      | 'Skill'
      | 'Habilitação Profissional'
      | 'Habilitação Academica'
  ) {
    const toast = await this.toastController.create({
      message: nome + ' eliminado/a com sucesso',
      duration: 2000,
      position: position,
    });

    await toast.present();
  }

  async loadIdiomas() {
    this.loadingSpinner();
    this.crudService.getIdiomas('idiomas').subscribe((res) => {
      this.idiomas = [...this.idiomas, ...res.idiomas];
      // console.log(res);
    });
  }

  async openModalCreateLang() {
    const modalProjects = await this.modalCtrl.create({
      component: CreateLanguageModalComponent,
    });
    await modalProjects.present();
  }
  // Hab Academicas
  async openModalAcademicSettings(item) {
    console.log(item);
    const modalHabAc = await this.modalCtrl.create({
      component: HabAcSettingsComponent,
      componentProps: {
        item: item,
      },
    });
    modalHabAc.onDidDismiss().then(() => {
      this.loadingSpinner();
      setTimeout(() => {
        this.crudService.getHabAc('allHabAc').subscribe((res) => {
          this.habAc = [...res.habA];
          // console.log(res);
        });
      }, 2000);
    });
    await modalHabAc.present();
  }
  async openModalCreateHabAc() {
    const modalHabAc = await this.modalCtrl.create({
      component: CreateHabAcModalComponent,
    });
    modalHabAc.onDidDismiss().then(() => {
      this.loadingSpinner();
      setTimeout(() => {
        this.crudService.getHabAc('allHabAc').subscribe((res) => {
          this.habAc = [...res.habA];
          // console.log(res);
        });
      }, 2000);
    });
    await modalHabAc.present();
  }
  async deleteHabAc(id: number) {
    this.crudService.delete('habAc', id).subscribe((res) => {});
    this.loadingSpinner();
    setTimeout(() => {
      this.crudService.getHabAc('allHabAc').subscribe((res) => {
        this.habAc = [...res.habA];
      });

      this.presentToastDelete('top', 'Habilitação Academica');
    }, 2000);
  }
  async loadHabAc() {
    this.loadingSpinner();
    this.crudService.getHabAc('allHabAc').subscribe((res) => {
      this.habAc = [...res.habA];
      // console.log(res);
    });
  }
  async deleteHabAcActionSheet(id) {
    const actionSheet = await this.actionSheetCtrl.create({
      mode: 'ios',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    if (result.data.action == 'delete') {
      this.deleteHabAc(id);
    }
  }
  // Hab Profissionais
  async openModalProfessionalSettings(item) {
    console.log(item);
    const modalHabPr = await this.modalCtrl.create({
      component: HabPrSettingsComponent,
      componentProps: {
        item: item,
      },
    });
    modalHabPr.onDidDismiss().then(() => {
      this.loadingSpinner();
      setTimeout(() => {
        this.crudService.getHabPr('allHabPr').subscribe((res) => {
          this.habPr = [...res.habP];
          // console.log(res);
        });
      }, 2000);
    });
    await modalHabPr.present();
  }
  async openModalCreateHabPr() {
    const modalHabPr = await this.modalCtrl.create({
      component: CreateHabPrModalComponent,
    });
    modalHabPr.onDidDismiss().then(() => {
      this.loadingSpinner();
      setTimeout(() => {
        this.crudService.getHabPr('allHabPr').subscribe((res) => {
          this.habPr = [...res.habP];
          // console.log(res);
        });
      }, 2000);
    });
    await modalHabPr.present();
  }
  async deleteHabPr(id: number) {
    this.crudService.delete('habPr', id).subscribe((res) => {});
    this.loadingSpinner();
    setTimeout(() => {
      this.crudService.getHabPr('allHabPr').subscribe((res) => {
        this.habPr = [...res.habP];
      });

      this.presentToastDelete('top', 'Habilitação Profissional');
    }, 2000);
  }
  async loadHabPr() {
    this.loadingSpinner();
    this.crudService.getHabPr('allHabPr').subscribe((res) => {
      this.habPr = [...res.habP];
      // console.log(res);
    });
  }
  async deleteHabPrActionSheet(id) {
    const actionSheet = await this.actionSheetCtrl.create({
      mode: 'ios',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    if (result.data.action == 'delete') {
      this.deleteHabPr(id);
    }
  }
  // Skills
  async openModalSkillSettings(item) {
    const modalSkills = await this.modalCtrl.create({
      component: SkillSettingsComponent,
      componentProps: {
        item: item,
      },
    });
    modalSkills.onDidDismiss().then(() => {
      this.loadingSpinner();
      setTimeout(() => {
        this.crudService
          .getProgrammingLang('programmingLang')
          .subscribe((res) => {
            this.programmingLang = [...res.progLang];
            // console.log(res);
          });
      }, 2000);
    });
    await modalSkills.present();
  }
  async openModalCreateSkills() {
    const modalSkills = await this.modalCtrl.create({
      component: CreateSkillsModalComponent,
    });
    modalSkills.onDidDismiss().then(() => {
      this.loadingSpinner();
      setTimeout(() => {
        this.crudService
          .getProgrammingLang('programmingLang')
          .subscribe((res) => {
            this.programmingLang = [...res.progLang];
            // console.log(res);
          });
      }, 2000);
    });
    await modalSkills.present();
  }
  async deleteSkill(id: number) {
    this.crudService.delete('skill', id).subscribe((res) => {});
    this.loadingSpinner();
    setTimeout(() => {
      this.crudService
        .getProgrammingLang('programmingLang')
        .subscribe((res) => {
          this.programmingLang = [...res.progLang];
        });

      this.presentToastDelete('top', 'Skill');
    }, 2000);
  }
  async loadSkill() {
    this.loadingSpinner();
    this.crudService.getProgrammingLang('programmingLang').subscribe((res) => {
      this.programmingLang = [...this.programmingLang, ...res.progLang];
      // console.log(res);
    });
  }
  async deleteSkillActionSheet(id) {
    const actionSheet = await this.actionSheetCtrl.create({
      mode: 'ios',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    if (result.data.action == 'delete') {
      this.deleteSkill(id);
    }
  }
  // Projects
  async openModalProjectSettings(item) {
    const modalProjects = await this.modalCtrl.create({
      component: ProjectSettingsComponent,
      componentProps: {
        item: item,
      },
    });
    modalProjects.onDidDismiss().then(() => {
      this.loadingSpinner();
      setTimeout(() => {
        this.crudService.getProjects('allProjects').subscribe((res) => {
          this.projetos = [...res.projetos];
          // console.log(res);
        });
      }, 2000);
    });
    await modalProjects.present();
  }
  async openModalCreateProjects() {
    const modalProjects = await this.modalCtrl.create({
      component: CreateProjectsModalComponent,
    });
    modalProjects.onDidDismiss().then(() => {
      this.loadingSpinner();
      setTimeout(() => {
        this.crudService.getProjects('allProjects').subscribe((res) => {
          this.projetos = [...res.projetos];
          // console.log(res);
        });
      }, 2000);
    });
    await modalProjects.present();
  }
  async deleteProject(id: number) {
    this.crudService.delete('projects', id).subscribe((res) => {});
    this.loadingSpinner();
    setTimeout(() => {
      this.crudService.getProjects('Allprojects').subscribe((res) => {
        this.projetos = [...res.projetos];
      });

      this.presentToastDelete('top', 'Projeto');
    }, 2000);
  }
  async loadProjects() {
    this.loadingSpinner();
    this.crudService.getProjects('allProjects').subscribe((res) => {
      this.projetos = [...res.projetos];
      // console.log(res);
    });
  }
  async deleteProjectActionSheet(id) {
    const actionSheet = await this.actionSheetCtrl.create({
      mode: 'ios',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    if (result.data.action == 'delete') {
      this.deleteProject(id);
    }
  }
}
