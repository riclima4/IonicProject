import { Component, Input, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { LoadingController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() isChecked: boolean;

  constructor(
    private translateService: TranslateService,
    private toastController: ToastController,
    private loadingCtrl: LoadingController
  ) {}
  ngOnInit() {}
  async loadingSpinner() {
    const loading = await this.loadingCtrl.create({
      spinner: 'crescent',
      mode: 'ios',
    });
    await loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 1000);
  }
  async changeLanguage(language: string) {
    await Preferences.set({ key: 'user-lang', value: language });

    this.loadingSpinner();
    setTimeout(() => {
      this.translateService.use(language);
      this.showToast(language);
    }, 1000);
  }

  async changeDarkMode() {
    this.isChecked = !this.isChecked;

    await Preferences.set({
      key: 'darkmode',
      value: this.isChecked ? 'true' : 'false',
    });

    if (this.isChecked) {
      document.body.setAttribute('color-theme', 'dark');
    } else {
      document.body.removeAttribute('color-theme');
    }
  }

  async showToast(lng) {
    if (lng == 'pt') {
      const toast = await this.toastController.create({
        message: this.translateService.instant('Idioma mudado para Português'),
        duration: 2000,
        position: 'top',
      });
      await toast.present();
    } else if (lng == 'en') {
      const toast = await this.toastController.create({
        message: this.translateService.instant('Language Changed to English'),
        duration: 2000,
        position: 'top',
      });
      await toast.present();
    }
  }
  // async ionViewWillEnter() {
  //   this.isChecked =
  //     (await Preferences.get({ key: 'darkmode' })).value === 'true';
  // }
  getIcon() {
    if (this.isChecked) {
      return 'sunny';
    }
    return 'moon';
  }
}
