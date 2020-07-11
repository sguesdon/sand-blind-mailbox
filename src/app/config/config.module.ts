import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ConfigRoutingModule } from './config-routing.module';

import { ConfigComponent } from './config.component';
import { SizeComponent } from './size/size.component';
import { MailBoxComponent } from './mailbox/mailbox.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ConfigComponent, SizeComponent, MailBoxComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule, ConfigRoutingModule]
})
export class ConfigModule {}
