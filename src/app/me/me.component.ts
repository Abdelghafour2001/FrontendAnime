import {Component, OnInit, ViewChild} from '@angular/core';
import {Router, ActivatedRoute, ActivatedRouteSnapshot, Params} from '@angular/router';
import {CommentService} from "../comment/comment.service";
import {MovieServiceService} from "../services/movie-service.service";
import {AuthService} from "../services/auth.service";
import {PostService} from "../shared/post.service";
import {PostModel} from "../shared/post-model";
import {CommentPayload} from "../comment/comment.payload";
import {User} from "../model/User";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {throwError} from "rxjs";

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {
  name!: string;
  posts!: PostModel[];
  comments?: CommentPayload[];
  postLength?: number;
  commentLength?: number;
  user!:User;
  reactiveFrom!:FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private postService:PostService, private commentService: CommentService,private authService:AuthService) {

     }

  ngOnInit(): void {
    this.name=this.authService.getUserName();
    console.log(this.name);this.commentService.getAllCommentsByUser(this.name).subscribe(data => {
      this.comments = data;
      this.commentLength = data.length;
    });
    this.postService.getAllPostsByUser(this.name).subscribe(data => {
      this.posts = data;
      this.postLength = data.length;
    });


    this.authService.getUserData(this.name).subscribe(data => {
      this.user = data;
      this.reactiveFrom = new FormGroup({
        name: new FormControl(this.user.username),
        email: new FormControl(this.user.email),
        created: new FormControl(this.user.created),
      });
    });

  console.log(this.reactiveFrom.value);
  }



  onSubmit() {

  }
}
