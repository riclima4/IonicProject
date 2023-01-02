import { Component, Input, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  //darkModeIcon: string = 'moon';
  @Input() isChecked: boolean = false;

  constructor(
    private translateService: TranslateService,
    private toastController: ToastController
  ) {}
  ngOnInit() {}
  async changeLanguage(language: string) {
    await Preferences.set({ key: 'user-lang', value: language });
    await this.showToast();
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

  async showToast() {
    const toast = await this.toastController.create({
      message: this.translateService.instant('Language Changed'),
      duration: 4000,
    });
    await toast.present();
  }

  getIcon() {
    if (this.isChecked) {
      return 'sunny';
    }
    return 'moon';
  }
}
