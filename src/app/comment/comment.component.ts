import { Component, Input } from '@angular/core';
import { Comment } from '../model/Comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input() comment: Comment;
  constructor() {
    // Initialize the property in the constructor
    this.comment = {} as Comment;
  }
}
