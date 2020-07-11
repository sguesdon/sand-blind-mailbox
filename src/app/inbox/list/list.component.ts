// import ImapClient from 'emailjs-imap-client'

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

var Imap = require('imap'),
inspect = require('util').inspect;

@Component({
  selector: 'inbox-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  private imap;

  constructor(private router: Router) { }

  async connect(): Promise<any> {

    return new Promise(async (resolve, reject) => {

      this.imap = new Imap({
        user: 'toto',
        password: 'toto',
        host: 'imap.gmail.com',
        port: 993,
        tls: true,
        tlsOptions: { servername: 'imap.gmail.com' }
      });


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
