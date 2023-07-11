import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'
  ]
})
export class HeaderComponent  implements OnInit {
  isLoggedIn?: boolean;

  username?: string;

  constructor(private authService: AuthService, private router: Router,private modalService:NgbModal) { }
  public open(modal: any): void {
    this.modalService.open(modal);
  }
  searchData: string = '';

  search() {
    if (this.searchData.trim() !== '') {
      this.router.navigate(['/search', this.searchData]);
    }
  }
activ=true;
  toggle(){
    this.activ= !this.activ;
  }
  activUserdrop=true;
  toggleUser(){
    this.activUserdrop= !this.activUserdrop;
  }
  ngOnInit() {
    this.authService.loggedIn.subscribe((data: boolean) => this.isLoggedIn = data);
    this.authService.username.subscribe((data: string) => this.username = data);
    this.isLoggedIn = this.authService.isLoggedIn();
    this.username = this.authService.getUserName();
  }

  goToUserProfile() {
    this.router.navigateByUrl('/me/' + this.username);
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.router.navigateByUrl('/login');
  }

}
