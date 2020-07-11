import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ElectronService } from './core/services';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title: String;
  public size: String;
  public backState: String;

  constructor(
    private electronService: ElectronService,
    private translate: TranslateService,
    private router: Router
  ) {

    this.size = this.electronService.config.get('config.size');
    this.electronService.config.onDidChange('config.size', (v) => this.size = v);

    this.translate.setDefaultLang('en');

    router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        var title = this.getTitle(router.routerState, router.routerState.root).join('-');
        this.title = title;
        this.backState = this.getBackState(router.routerState, router.routerState.root);
      }
    });

    if (electronService.isElectron) {
      console.log(process.env);
      console.log('Run in electron');
      console.log('Electron ipcRenderer', this.electronService.ipcRenderer);
      console.log('NodeJS childProcess', this.electronService.childProcess);
    } else {
      console.log('Run in browser');
    }
  }

  getBackState(state, parent) {
    if(parent && parent.snapshot.data && parent.snapshot.data.backState) {
      return parent.snapshot.data.backState;
    }
    if(state && parent) {
      return this.getBackState(state, state.firstChild(parent));
    }
    return '../';
  }

  getTitle(state, parent) {
    var data = [];
    if(parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if(state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }
}
