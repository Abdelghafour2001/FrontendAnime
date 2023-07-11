import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../model/User";
import {PostModel} from "../shared/post-model";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  inputData1: number = 0;
  inputData2: number = 0;
  inputData3: number = 0;
  users: User[] = [];
  tableColumns: string[] = ['userId', 'username', 'email', 'created'];
  comments: Comment[] = [];
  tableColumns2: string[] = ['id', 'text', 'createdDate', 'user'];
  posts: Array<PostModel> = [];
  tableColumns3: string[] = ['id', 'postName', 'userName', 'description'];

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getUsers();
    this.getComments();
this.getPosts();
  }
  getPosts() {
    this.http.get<PostModel[]>('/api/api/posts').subscribe(
      (posts) => {
        this.posts = posts;
      },
      (error) => {
        // Handle error
      }
    );
  }
  getComments() {
    this.http.get<Comment[]>('/api/api/comments/getCommentsAll').subscribe(
      (comments) => {
        this.comments = comments;
      },
      (error) => {
        // Handle error
      }
    );
  }
  getUsers() {
    this.http.get<User[]>('/api/api/users/getUsers').subscribe(
      (users) => {
        this.users = users;
      },
      (error) => {
        // Handle error
      }
    );
  }

  deletePost(postId: number): void {
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
  toDateTime(nm: number | undefined){
    let dateTime: Date;
    if(nm!=undefined)
      dateTime = new Date(nm*1000); // Multiply by 1000 to convert seconds to milliseconds
    else
      dateTime=new Date(1689006162 * 1000);
    return dateTime.toISOString();
  }
  deleteUser(userId: number): void {
    this.http.delete(`/api/api/admin/users/${userId}`).subscribe(
      () => {
        console.log('User deleted successfully');
        // Perform any additional actions upon successful deletion
      },
      (error) => {
        console.error('Error deleting user:', error);
        // Handle error scenarios
      }
    );
  }

  deleteComment(commentId: number): void {
    this.http.delete(`/api/api/admin/comments/${commentId}`).subscribe(
      () => {
        console.log('Comment deleted successfully');
        // Perform any additional actions upon successful deletion
      },
      (error) => {
        console.error('Error deleting comment:', error);
        // Handle error scenarios
      }
    );
  }
}
