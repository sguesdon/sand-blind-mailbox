import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigRoutingModule } from './config-routing.module';

import { SizeComponent } from './size/size.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SizeComponent],
  imports: [CommonModule, SharedModule, ConfigRoutingModule]
})
export class ConfigModule {}
