import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as ValdURL from 'valid-url';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  public link: string;

  constructor(
    public activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.loadUrl();
  }

  loadUrl(): void {
    this.link = 'https://nidoo.com.co';
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      console.log(params);
      if (params['url']) {
        if (ValdURL.isUri(params['url'])){
          this.link = params['url'];
          this.redirectUrl(this.link);
        }else{
          this.redirectUrl(this.link);
        }
      }else{
        this.redirectUrl(this.link);
      }
    });
  }

  redirectUrl(url) {
    setTimeout(() => {
      window.location.href = url;
    }, 5000);
  }
}
