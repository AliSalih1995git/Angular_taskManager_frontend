import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormSubmission } from '../dataModel/datamodel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  // user related task
  getAllTask(): Observable<any> {
    return this.http.get('/task');
  }
  getAllUsers(): Observable<any> {
    return this.http.get('/auth');
  }
  deleteUser(id: string): Observable<any> {
    return this.http.delete(`/auth/${id}`);
  }
  bloack(id: string): Observable<any> {
    return this.http.put(`/auth/block/${id}`, {});
  }
  unblock(id: string): Observable<any> {
    return this.http.put(`/auth/unblock/${id}`, {});
  }

  // task related service
  singleTask(id: string): Observable<any> {
    return this.http.get(`/task/singleTask/${id}`);
  }

  createtask(formData: FormSubmission): Observable<any> {
    return this.http.post('/task', formData);
  }
  updateTask(id: string, formData: FormSubmission): Observable<any> {
    console.log(id, 'taskId');

    return this.http.put(`/task/${id}`, formData);
  }
  deleteTask(id: string): Observable<any> {
    return this.http.delete(`/task/${id}`);
  }
}
