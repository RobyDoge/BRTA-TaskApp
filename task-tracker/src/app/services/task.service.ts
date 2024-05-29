import { Injectable } from '@angular/core';
import { Task } from '../../task';
import { Status } from '../../status';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  baseURL="http://localhost:5190/Task"
   readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  
  constructor( 
    private httpClient: HttpClient) {
   }

   

  getTasks():Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.baseURL);
  }

 
  addTask(newTask: Task) {
    
      return this.httpClient.post<Task>(this.baseURL, newTask, { headers: this.httpOptions.headers, responseType: 'text' as 'json' });
      
    } 
  
  editTask(task: Task) {
    return this.httpClient.put<Task>(`${this.baseURL}/${task.id}`, task);
      }
    
  deleteTask(task: Task) {
    return this.httpClient.delete<void>(`${this.baseURL}/${task.id}`,{ headers: this.httpOptions.headers, responseType: 'text' as 'json' });
     }
    

}
