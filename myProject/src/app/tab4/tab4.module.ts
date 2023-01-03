import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab4Page } from './tab4.page';

import { Tab4PageRoutingModule } from './tab4-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '../components/components.module';
import { HabAcSettingsComponent } from '../modals/hab-ac-settings/hab-ac-settings.component';
import { CreateHabAcModalComponent } from '../modals/create-hab-ac-modal/create-hab-ac-modal.component';
import { CreateLanguageModalComponent } from '../modals/create-language-modal/create-language-modal.component';
import { HabPrSettingsComponent } from '../modals/hab-pr-settings/hab-pr-settings.component';
import { CreateHabPrModalComponent } from '../modals/create-hab-pr-modal/create-hab-pr-modal.component';
import { CreateSkillsModalComponent } from '../modals/create-skills-modal/create-skills-modal.component';
import { CreateProjectsModalComponent } from '../modals/create-projects-modal/create-projects-modal.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab4PageRoutingModule,
    TranslateModule,
    ComponentsModule,
  ],
  declarations: [
    Tab4Page,
    HabAcSettingsComponent,
    HabPrSettingsComponent,
    CreateHabAcModalComponent,
    CreateLanguageModalComponent,
    CreateHabPrModalComponent,
    CreateSkillsModalComponent,
    CreateProjectsModalComponent,
  ],
  entryComponents: [
    HabAcSettingsComponent,
    HabPrSettingsComponent,
    CreateHabAcModalComponent,
    CreateLanguageModalComponent,
    CreateHabPrModalComponent,
    CreateSkillsModalComponent,
    CreateProjectsModalComponent,
  ],
})
export class Tab4PageModule {}
