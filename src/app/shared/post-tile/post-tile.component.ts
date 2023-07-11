import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { PostService } from '../post.service';
import { PostModel } from '../post-model';
import { Router } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PostTileComponent implements OnInit {

  @Input() posts!: PostModel[];
  username?: string;

  constructor(private router: Router,private http: HttpClient,private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.username.subscribe((data: string) => this.username = data);
    this.username = this.authService.getUserName();
  }

  goToPost(id: number): void {
    this.router.navigateByUrl('/view-post/' + id);
  }


  delete(postId: number): void {
    this.http.delete(`/api/api/admin/posts/${postId}`).subscribe(
      () => {
        console.log('Post deleted successfully');
        // Perform any additional actions upon successful deletion
      },
      (error) => {
        console.error('Error deleting post:', error);
        // Handle error scenarios
      }
    );
  }
}
