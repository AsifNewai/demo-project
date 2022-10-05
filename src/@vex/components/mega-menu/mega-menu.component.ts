import { Component, OnInit } from '@angular/core';
import { PopoverRef } from '../popover/popover-ref';

export interface MegaMenuFeature {
  icon: string;
  label: string;
  route: string;
}

export interface MegaMenuPage {
  label: string;
  route: string;
}

@Component({
  selector: 'vex-mega-menu',
  templateUrl: './mega-menu.component.html'
})
export class MegaMenuComponent implements OnInit {

  constructor(private popoverRef: PopoverRef<MegaMenuComponent>) { }

  ngOnInit() {
  }

  close() {
    this.popoverRef.close();
  }
}
