import {Component, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {Subject} from 'rxjs';
import {NbDialogService, NbMenuService, NbSidebarService, NbThemeService} from '@nebular/theme';
import {LayoutService} from '../../@core/utils';
import {filter, map, takeUntil} from 'rxjs/operators';
import {AuthService} from '../../modules/auth/service/auth.service';

@Component({
  selector: 'hl-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.scss'],
})
export class CommonHeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;

  menuClickSubscribe = null;
  userMenu = [ { title: 'Profile', link: '/setting/profile' }, { title: 'Switch Account'} ];
  languageMenu = [{ title: 'English'}, {title: 'Français'}];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private authService: AuthService,
              private layoutService: LayoutService,
              private dialogService: NbDialogService,
              ) {
  }

  ngOnInit() {
    this.menuClickSubscribe = this.menuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'header-context-menu'),
        map(({ item: { title } }) => title),
      )
      .subscribe(title => {
        this.userMenu.forEach((item) => {
        });
      });
    if (this.authService.loginStatus) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.menuClickSubscribe.unsubscribe();
  }


  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

  logout() {
    return this.authService.logout();
  }

  confirmLogoutDialog(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, { context: 'Do you want to exit the system?', closeOnBackdropClick: false });
  }

  switchUser(switchUser: TemplateRef<any>) {
    this.dialogService.open(switchUser);
  }
}
