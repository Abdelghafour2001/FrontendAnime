import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private http: HttpClient) {}

  deletePost(postId: number): void {
    this.http.delete(`/admin/posts/${postId}`).subscribe(
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

  deleteUser(userId: number): void {
    this.http.delete(`/admin/users/${userId}`).subscribe(
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
    this.http.delete(`/admin/comments/${commentId}`).subscribe(
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
