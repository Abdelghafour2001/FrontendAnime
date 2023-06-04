import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommentComponent } from '../comment/comment.component';
import {Comment} from "../model/Comment";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../assets/files/css/min.css'],
})
export class HomeComponent {

  public sampleComment: Comment = {
    id: 1,
    text: 'Sample comment',
    createdDate: new Date(),
    // @ts-ignore
    user: { username: 'JohnDoe' },
  };

  constructor(private modalService: NgbModal) {}

  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
