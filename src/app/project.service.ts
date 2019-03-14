import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { project } from '/home/nineleaps/Desktop/rms/rms/src/app/project.model';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
import { ApiResponse } from '/home/nineleaps/Desktop/rms/rms/src/app/api.response'

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  dtOptions: DataTables.Settings = {};
  projectList: Observable<project[]>;
  newproject : project;
  readonly ROOT_URL:any ="http://54b8ba96.ngrok.io/api";

  constructor(private http: HttpClient) { }

  getProject()
  {
    return this.http.get<project[]>(this.ROOT_URL + '/Projects');
  }

 

  createProject(data) {
    console.log(data.get("ProjectTitle"));

let body = new URLSearchParams();
//body.set('ProjectId', "1" );
body.set('ProjectTitle', data.get("ProjectTitle") );
body.set('ProjectDescription', data.get("ProjectDescription"));
body.set('StartDate',data.get("StartDate") );
body.set('EndDate',data.get("EndDate"));

let options = {
  headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
};

//console.log(this.ROOT_URL+"\n"+'/Projects/1'+"\n"+ body.toString()+"\n"+options);

    return this.http.post(this.ROOT_URL+'/Projects', body.toString(),options);
    
  }

  updateProduct(data){
    return this.http.post(this.ROOT_URL + '/projects', data.toString(),);
  }
  

  EditProject(emp: project) {  
    console.log(emp);  
    const params = new HttpParams().set('ProjectId', emp.ProjectId.toString());  
    const headers = new HttpHeaders().set('content-type', 'application/json');  
    var body = {  
      ProjectTitle: emp.ProjectTitle, ProjectDescription: emp.ProjectDescription, ProjectId: emp.ProjectId, StartDate: emp.StartDate
      , EndDate: emp.EndDate
    }  
    return this.http.put<project>(this.ROOT_URL + '/Projects' + emp.ProjectId, body, { headers, params }) 
    .pipe(map((response: any) => response.json()));
    
}
} 
