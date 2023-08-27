import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormSubmission } from '../dataModel/datamodel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getAllTask(): Observable<any> {
    return this.http.get('/task');
  }
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
  getAllUsers(): Observable<any> {
    return this.http.get('/auth');
  }
}
