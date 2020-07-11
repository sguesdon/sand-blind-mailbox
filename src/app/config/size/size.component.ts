import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElectronService } from '../../core/services';

@Component({
  selector: 'config-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.scss']
})
export class SizeComponent implements OnInit {

  public size: Number = 1;
  private config: any;

  constructor(
    private router: Router,
    private electronService: ElectronService
  ) {
    this.config = this.electronService.config;
  }

  async ngOnInit(): Promise<any> {
    if(!this.config.get('config.size')) {
      this.config.set('config.size', 1);
    }
    this.size = this.config.get('config.size');
  }

  sizeChanged() {
    this.config.set('config.size', this.size);
  }
}
