import { Injectable } from '@angular/core';

// If you import a module but never use any of the imported values other than as TypeScript types,
// the resulting javascript file will look as if you never imported the module at all.
import { ipcRenderer, webFrame, remote } from 'electron';
import * as childProcess from 'child_process';
import * as fs from 'fs';
import * as Datastore from 'nedb';

@Injectable({
  providedIn: 'root'
})
export class ConfigService extends Datastore {
  constructor() {
    super({
      filename: `${process.resourcesPath}/app/db/config.db`,
      autoload: true
    });
  }
}
