import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ActivatedRouteSnapshot, Params} from '@angular/router';
import {CommentService} from "../comment/comment.service";

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {
  name!: string;
  //posts: PostModel[];
  //comments: CommentPayload[];
//  postLength: number;
  //commentLength: number;

  constructor(private activatedRoute: ActivatedRoute,
    private commentService: CommentService) {
  /*  this.postService.getAllPostsByUser(this.name).subscribe(data => {
      this.posts = data;
      this.postLength = data.length;
    });
    this.commentService.getAllCommentsByUser(this.name).subscribe(data => {
      this.comments = data;
      this.commentLength = data.length;
    });*/
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params:Params)=>{
        this.name=params['id'];
      });
  }

}
