import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  hostURL = environment.hostUrl;
  constructor(private http: HttpClient) { }

  getTasks(): Observable<any> {
    return this.http.get(this.hostURL + '/task/');
  }

  createTask(task: {}): Observable<any> {
    return this.http.post(this.hostURL + '/task/', task);
  }

}
