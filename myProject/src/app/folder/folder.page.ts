import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage {
  public folder!: string;

  constructor(
    private translateService: TranslateService,
    private toastController: ToastController
  ) {}

  async showToast() {
    const toast = await this.toastController.create({
      message: this.translateService.instant('hello'),
      duration: 4000,
    });
    await toast.present();
  }
}
