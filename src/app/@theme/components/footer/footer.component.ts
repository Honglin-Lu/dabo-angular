import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Developed by <b><a href="https://honglin.tech" target="_blank">Honglin</a></b> 2022.02 ( Angular ), UI kit component with( <a href="https://github.com/akveo/ngx-admin" target="_blank">ngx-admin</a> )
    </span>
    <div class="socials">
      <a href="#" target="_blank" class="ion ion-social-github"></a>
    </div>
  `,
})
export class FooterComponent {
}
