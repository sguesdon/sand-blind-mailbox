import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElectronService } from '../../core/services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'config-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.scss']
})
export class MailBoxComponent implements OnInit {

  private config: any;
  public checkoutForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private electronService: ElectronService
  ) {
    this.config = this.electronService.config;
    this.checkoutForm = this.formBuilder.group({
      password: '',
      user: '',
      host: '',
      port: 0,
      tls: false
    });
  }

  async ngOnInit(): Promise<any> {
    this.checkoutForm.patchValue(this.config.get('config.mail') || {});
    this.onChanges();
  }

  get f() {
    return this.checkoutForm.controls;
  }

  onChanges(): void {
    console.log('onChanges');
    this.checkoutForm.valueChanges.subscribe(config => {
      this.config.set('config.mail', config);
    });
  }

  async onSubmit() {
    // this.submitted = true;
    //
    // // stop here if form is invalid
    // if (this.checkoutForm.invalid) {
    //   return;
    // }
    //
    // const data = Object.assign(this.account, this.checkoutForm.value);
    //
    // if(typeof data._id !== 'undefined') {
    //   this.account = await this.accountService.put(data._id, data);
    // } else {
    //   this.account = await this.accountService.post(data);
    // }
    //
    // this.checkoutForm.patchValue(this.account);
  }

  sizeChanged() {
    // this.config.set('config.size', this.size);
  }
}
