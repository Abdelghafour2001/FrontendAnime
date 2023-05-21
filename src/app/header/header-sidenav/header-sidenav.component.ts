import { Component } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-header-sidenav',
  templateUrl: './header-sidenav.component.html',
  styleUrls: ['./header-sidenav.component.css']
})
export class HeaderSidenavComponent {
collapsed=false;
constructor(private modalService:NgbModal) { }
  public open(modal: any): void {
    this.modalService.open(modal);
  }

}
