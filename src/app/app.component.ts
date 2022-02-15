import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';
import {MENU_ITEMS} from './pages/pages-menu';
import {AuthService} from './modules/auth/service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  menu = MENU_ITEMS;

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
