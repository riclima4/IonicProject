import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  isChecked: boolean = false;
  public loaded = false;

  constructor() {}
  async ionViewWillEnter() {
    this.isChecked =
      (await Preferences.get({ key: 'darkmode' })).value === 'true';
  }
  async ionViewWillLeave() {
    this.isChecked =
      (await Preferences.get({ key: 'darkmode' })).value === 'true';
  }
}
