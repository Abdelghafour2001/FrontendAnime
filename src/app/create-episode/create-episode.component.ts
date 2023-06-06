import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PostService} from "../shared/post.service";
import {SubredditService} from "../subreddit/subreddit.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CreatePostPayload} from "../post/create-post/create-post.payload";
import {SubredditModel} from "../subreddit/subreddit-response";
import {Genre} from "../model/Genre";
import {MovieServiceService} from "../services/movie-service.service";
import {CreateEpisodePayload} from "./create-episode.payload";
import {throwError} from "rxjs";

@Component({
  selector: 'app-create-episode',
  templateUrl: './create-episode.component.html',
  styleUrls: ['./create-episode.component.css']
})
export class CreateEpisodeComponent implements OnInit{
  createPostForm!: FormGroup;
  postPayload: CreateEpisodePayload;
  genres:Genre[] | undefined;
  constructor(private router: Router,
              private service:MovieServiceService) {
    this.postPayload = {
      title: '',
    url: '',
    image: '',
    releaseDate: '',
    duration: '',
    type: '',
    description: '',
    }
  }
  ngOnInit(): void {
    this.createPostForm = new FormGroup({
      title: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      releaseDate: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
    this.service.getAllGenres().subscribe(data=>{
      this.genres=data;
    });
  }
  createPost() {
    this.postPayload.title = this.createPostForm.get('title')?.value;
    this.postPayload.image = this.createPostForm.get('image')?.value;
    this.postPayload.duration = this.createPostForm.get('duration')?.value;
    this.postPayload.releaseDate = this.createPostForm.get('releaseDate')?.value;
    this.postPayload.type = this.createPostForm.get('type')?.value;
    this.postPayload.url = this.createPostForm.get('url')?.value;
    this.postPayload.description = this.createPostForm.get('description')?.value;

    this.service.createMovie(this.postPayload).subscribe((data) => {
      this.router.navigateByUrl('/our-movies');
    }, error => {
      throwError(error);
    })
  }

  discardMovie() {
    this.router.navigateByUrl('/');
  }
}
