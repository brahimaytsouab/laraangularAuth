import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { SnotifyService } from 'ng-snotify';
import { NgProgress, NgProgressRef } from '@ngx-progressbar/core';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {

  public form = {
    email: null
  };

  private progressRef: NgProgressRef;


  constructor(
    private Jarvis: JarwisService
    , private notify: SnotifyService
    , private Notfiy: SnotifyService
    , private progress: NgProgress) { }

  ngOnInit() {
    this.progressRef = this.progress.ref();
  }

  onSubmit() {
    // this.Notfiy.info('Wait...' , {timeout: 5000});
    // this.startLoading();
    this.Jarvis.sendPasswordResetLink(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.notify.error(error.error.error)
    );
  }

  handleResponse(res) {
    this.Notfiy.success(res.data, {timeout: 3000});
    // this.completeLoading();
    this.form.email = null;
  }

  handleErrorResponse(error) {
    // this.completeLoading();
    this.notify.error(error.error.error);
  }

  startLoading() {
    this.progressRef.start();
  }

  completeLoading() {
    this.progressRef.complete();
  }

  changeProgressColor() {
    this.progressRef.setConfig({ color: 'green' });
  }


}
