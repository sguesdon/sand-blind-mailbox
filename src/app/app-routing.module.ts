import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';

import { HomeRoutingModule } from './home/home-routing.module';
import { DetailRoutingModule } from './detail/detail-routing.module';
import { ConfigRoutingModule } from './config/config-routing.module';
import { InboxRoutingModule } from './inbox/inbox-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    data: {
      title: 'PAGES.HOME.TITLE',
      backState: false
    }
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeRoutingModule,
    DetailRoutingModule,
    ConfigRoutingModule,
    InboxRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
