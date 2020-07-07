import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SizeComponent } from './size/size.component';

const routes: Routes = [
  {
    path: 'config/size',
    component: SizeComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigRoutingModule {}
