import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PostModel } from '../_model/post.model';
import { ReactingModel } from '../_model/reacting.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor( private http: HttpClient) { }
  
  getAll(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(environment.apiUrl+environment.ApiPostList);
  }

  get(id: any): Observable<PostModel> {
    return this.http.get<PostModel>(`${environment.apiUrl}${environment.ApiPostGet}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(environment.apiUrl+environment.ApiPostSave, data);
  }

  createComment(data: any): Observable<any> {
    return this.http.post(environment.apiUrl+environment.ApiCommentSave, data);
  }

  update(data: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}${environment.ApiPostUpdate}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${environment.apiUrl}${environment.ApiPostDelete}/${id}`);
  }

  deleteComment(id: any): Observable<any> {
    return this.http.delete(`${environment.apiUrl}${environment.ApiCommentDelete}/${id}`);
  }

  getReactingByComment(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}${environment.ApiCommentReactingGet}`,data);
  }
  createReacting(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}${environment.ApiCommentReactingSave}`, data);
  }
  deleteReacting(data: any): Observable<any> {
    return this.http.delete(`${environment.apiUrl}${environment.ApiCommentReactingDelete}`, data);
  }



}