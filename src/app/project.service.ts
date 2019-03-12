import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { project } from '/home/nineleaps/Desktop/rms/rms/src/app/project.model';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projectList: Observable<project[]>;
  newproject : project;
  readonly ROOT_URL:any ="http://1fd9e27b.ngrok.io/api";

  constructor(private http: HttpClient) { }

  getProject()
  {
    return this.http.get<project[]>(this.ROOT_URL + '/Projects');
  }

  EditProject(emp: project) {  
    console.log(emp);  
   const params = new HttpParams().set('ProjectId', emp.ProjectId.toString());  
    const headers = new HttpHeaders().set('content-type', 'application/json');  
    var body = {  
      ProjectTitle: emp.ProjectTitle, ProjectDescription: emp.ProjectDescription, ProjectId: emp.ProjectId, StartDate: emp.StartDate
      , EndDate: emp.EndDate
    }  
    return this.http.put<project>(this.ROOT_URL + 'Projects/' + emp.ProjectId, body, { headers, params }) 
    .pipe(map((response: any) => response.json()));
    
}
} 
