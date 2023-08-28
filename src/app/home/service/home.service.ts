import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private router: Router, private http: HttpClient) {}

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('auth');
  }

  getUserTask(): Observable<any> {
    return this.http.get(`/task/singleUserTask`);
  }
  singleTask(id: string): Observable<any> {
    return this.http.get(`/task/singleTaskHome/${id}`);
  }
  updateStatus(taskId: string, status: object): Observable<any> {
    return this.http.patch(`/task/${taskId}`, status);
  }
}
