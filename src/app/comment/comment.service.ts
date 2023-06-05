import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommentPayload } from './comment.payload';
import { Observable } from 'rxjs';
import {Comment} from "../model/Comment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = '/api/api/comments/by-episode/';

  constructor(private httpClient: HttpClient) { }

  getAllCommentsForPost(postId: number): Observable<CommentPayload[]> {
    return this.httpClient.get<CommentPayload[]>("/api/api/comments?postId="+ postId);
  }
  getComments(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(this.apiUrl);
  }
  postComment(commentPayload: CommentPayload): Observable<any> {
    return this.httpClient.post<any>('/api/api/comments/', commentPayload);
  }

  getAllCommentsByUser(name: string) {
    return this.httpClient.get<CommentPayload[]>('/api/api/comments?username=' + name);
  }
}

