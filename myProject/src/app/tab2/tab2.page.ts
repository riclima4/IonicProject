import { Component } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  darkModeIcon: string = 'moon';
  constructor(
    private translateService: TranslateService,
    private toastController: ToastController
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

  toggleTheme(event: any) {
    console.log(document.body.attributes);
    if (event) {
      if (document.body.attributes.length == 0) {
        document.body.setAttribute('color-theme', 'dark');
        this.darkModeIcon = this.darkModeIcon === 'moon' ? 'sunny' : 'moon';
      } else {
        document.body.removeAttribute('color-theme');
        this.darkModeIcon = this.darkModeIcon === 'moon' ? 'sunny' : 'moon';
      }
    }
  }
}
