import { Component, ElementRef, HostBinding, Input } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { ConfigService } from '../../config/config.service';
import { map, startWith, switchMap } from 'rxjs/operators';
import { NavigationService } from '../../services/navigation.service';
import { PopoverService } from '../../components/popover/popover.service';
import { MegaMenuComponent } from '../../components/mega-menu/mega-menu.component';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'vex-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  @Input() mobileQuery: boolean;

  @Input()
  @HostBinding('class.shadow-b')
  hasShadow: boolean;

  navigationItems = this.navigationService.items;

  isHorizontalLayout$: Observable<boolean> = this.configService.config$.pipe(map(config => config.layout === 'horizontal'));
  isVerticalLayout$: Observable<boolean> = this.configService.config$.pipe(map(config => config.layout === 'vertical'));
  isNavbarInToolbar$: Observable<boolean> = this.configService.config$.pipe(map(config => config.navbar.position === 'in-toolbar'));
  isNavbarBelowToolbar$: Observable<boolean> = this.configService.config$.pipe(map(config => config.navbar.position === 'below-toolbar'));
  userVisible$: Observable<boolean> = this.configService.config$.pipe(map(config => config.toolbar.user.visible));

  constructor(private layoutService: LayoutService,
              private configService: ConfigService,
              private navigationService: NavigationService,
              private popoverService: PopoverService) { }

  openSidenav(): void {
    this.layoutService.openSidenav();
  }
}
