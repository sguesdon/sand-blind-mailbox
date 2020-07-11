// import ImapClient from 'emailjs-imap-client'

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ElectronService } from '../../core/services';

const Imap = require('imap');


@Component({
  selector: 'inbox-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  private imap;
  private config;

  constructor(
    private router: Router,
    private electronService: ElectronService
  ) {
    this.config = this.electronService.config;
  }

  async connect(): Promise<any> {

    return new Promise(async (resolve, reject) => {
      const imapConfig: any = this.config.get('config.mail');
      if(imapConfig.tls) {
        imapConfig.tlsOptions = {
          servername: imapConfig.host
        };
      }
      console.log(imapConfig);
      this.imap = new Imap(imapConfig);
      this.imap.once('ready', () => {
        this.imap.openBox('INBOX', true, (err, box) => {
          if(err) reject(err)
          else resolve(box)
        });
      });
      this.imap.once('error', (err) => {
        reject(err);
      });

      this.imap.connect();
    });
  }

  async ngOnInit(): Promise<any> {
    const box = await this.connect();
    console.log(box);
  }
}
