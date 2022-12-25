import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  darkModeIcon: string = 'moon';
  constructor() {}
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
