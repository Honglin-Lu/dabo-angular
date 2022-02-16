import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';
import {AuthService} from './modules/auth/service/auth.service';
import {Router} from '@angular/router';
import {DABO_MENU_CONFIG} from './base/config-menu/dabo-menu';

@Component({
  selector: 'ngx-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  menu = DABO_MENU_CONFIG;

  loginStatus = false;

  constructor(private analytics: AnalyticsService,
              private seoService: SeoService,
              private authService: AuthService,
              private router: Router,
  ) {
    authService.sub.subscribe(res => {this.loginStatus = res});
    this.loginStatus = localStorage.getItem('user') ? true : false;
    if (this.loginStatus === false) {
      this.router.navigate(['/auth/login']);
    }
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
  }

}
