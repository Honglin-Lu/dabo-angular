import {Component, Inject, Input, OnInit} from '@angular/core';
import {NB_WINDOW, NbMenuService, NbWindowControlButtonsConfig, NbWindowService} from '@nebular/theme';
import {filter, map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'hl-table-toolbar',
  templateUrl: './table-toolbar.component.html',
  styleUrls: ['./table-toolbar.component.scss'],
})
export class TableToolbarComponent implements OnInit {

  @Input() toolbarPopup;

  menuClickSubscribe = null;
  currentRoute = null;

  buttonsConfig: NbWindowControlButtonsConfig = {
    minimize: true,
    maximize: false,
    fullScreen: true,
  };

  constructor(
    private router: Router,
    private windowService: NbWindowService,
    private nbMenuService: NbMenuService,
    @Inject(NB_WINDOW) private window) {
    this.currentRoute = router.url;
  }

  ngOnInit(): void {
    this.menuClickSubscribe = this.nbMenuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'toolbar-context-menu'),
        map(({ item: { title } }) => title),
      )
      .subscribe(title => {
            this.toolbarPopup['morePopup'].forEach((item) => {
            if (title === item['title']) {
              this.openWindow(item['comp'], item['title']);
            }
          });
      });
  }

  openWindow(
    comp = this.toolbarPopup['addBtnPopup']['comp'],
    title = this.toolbarPopup['addBtnPopup']['title']) {
    this.windowService.open(
      comp,
      {
        title: title,
        buttons: this.buttonsConfig,
        hasBackdrop: true,
        closeOnBackdropClick: false,
      });
  }

  ngOnDestroy(): void {
    this.menuClickSubscribe.unsubscribe();
  }

}
