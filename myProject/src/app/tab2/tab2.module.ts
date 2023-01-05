import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectModalComponentComponent } from '../modals/project-modal-component/project-modal-component.component';
import { HabAcModalComponent } from '../modals/hab-ac-modal/hab-ac-modal.component';
import { HabPrModalComponent } from '../modals/hab-pr-modal/hab-pr-modal.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    TranslateModule,
    ComponentsModule,
  ],
  declarations: [
    Tab2Page,
    ProjectModalComponentComponent,
    HabAcModalComponent,
    HabPrModalComponent,
  ],
  entryComponents: [
    ProjectModalComponentComponent,
    HabAcModalComponent,
    HabPrModalComponent,
  ],
})
export class Tab2PageModule {}
