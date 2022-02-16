import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'ngx-layout-side',
//   templateUrl: './layout-side.component.html',
//   styleUrls: ['./layout-side.component.scss']
// })

@Component({
  selector: 'hl-layout-side',
  styleUrls: ['./layout-side.component.scss'],
  template: `
    <nb-layout>
      <nb-layout-header fixed>
        <hl-common-header></hl-common-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

<!--      <nb-layout-footer fixed>-->
<!--        <hl-common-footer></hl-common-footer>-->
<!--      </nb-layout-footer>-->
    </nb-layout>
  `,
})
export class LayoutSideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
