import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';
import {MENU_ITEMS} from './pages/pages-menu';
import {AuthService} from './modules/auth/service/auth.service';

@Component({
  selector: 'ngx-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  menu = MENU_ITEMS;

  constructor(private analytics: AnalyticsService, private seoService: SeoService, private authService: AuthService) {
    // console.log(authService.logStatus);
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
  }

}
