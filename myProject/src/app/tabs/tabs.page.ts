import { Component, ElementRef, ViewChild } from '@angular/core';

import { TabBarService } from '../tab-bar.service';

const TAB_PAGES: any[] = [
  {
    title: 'Home',
    tab: 'home',
    icon: 'home',
    inSidemenu: true,
    inTabBar: true,
    showTabBar: true,
  },
  {
    title: 'Sobre Mim',
    tab: 'aboutme',
    icon: 'person',
    inSidemenu: true,
    inTabBar: true,
    showTabBar: true,
  },
  {
    title: 'Definições',
    tab: 'login',
    icon: 'settings-sharp',
    inSidemenu: false,
    inTabBar: false,
    showTabBar: true,
  },
  {
    title: 'Definições',
    tab: 'settings',
    icon: 'settings-sharp',
    inSidemenu: true,
    inTabBar: true,
    showTabBar: true,
  },
];

/*
 * TABS_ROOT is the root path of all pages, e.g, if you set this
 * to 'app' then all pages start with the path 'app' as in:
 * http://localhost:8100/app/tab1.
 */

export const APP_PAGES: any[] = TAB_PAGES.map((page: any) => {
  page.url = '/' + page.tab;
  return page;
});

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  public readonly tabBarPages: any = TAB_PAGES.filter(
    (page: any) => page.inTabBar
  );

  @ViewChild('tabBar', { read: ElementRef, static: false })
  private tabBarRef!: ElementRef;

  constructor(private tabBarService: TabBarService) {}

  public ngAfterViewInit(): void {
    const pagesShowingTabBar: Set<string> = new Set<string>(
      TAB_PAGES.filter((page: any) => page.showTabBar).map(
        (page: any) => page.tab
      )
    );
    this.tabBarService.init(this.tabBarRef, pagesShowingTabBar);
  }
}
