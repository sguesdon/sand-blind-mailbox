import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ConfigComponent } from './config.component';
import { SizeComponent } from './size/size.component';
import { MailBoxComponent } from './mailbox/mailbox.component';

const routes: Routes = [
  {
    path: 'config',
    component: ConfigComponent,
    data: {
      title: 'PAGES.CONFIG.TITLE'
    }
  },
  {
    path: 'config/size',
    component: SizeComponent,
    data: {
      title: 'PAGES.CONFIG.SIZE.TITLE',
      backState: 'config'
    }
  },
  {
    path: 'config/mail',
    component: MailBoxComponent,
    data: {
      title: 'PAGES.CONFIG.MAIL.TITLE',
      backState: 'config'
    }
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigRoutingModule {}
