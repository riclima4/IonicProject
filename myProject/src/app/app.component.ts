import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { LocalizationService } from './services/localization/localization.service';

import { APP_PAGES } from './tabs/tabs.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages: any[] = APP_PAGES.filter((page) => page.inSidemenu);
  constructor(
    private platform: Platform,
    private localizationService: LocalizationService
  ) {}
  async ngOnInit() {
    await this.initializeApp();
  }
  async initializeApp() {
    await this.platform.ready();
    await this.localizationService.setInitialAppLanguage();
  }
}
