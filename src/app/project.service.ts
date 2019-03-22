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

  formData: project;
  dtOptions: DataTables.Settings = {};
  projectList: Observable<project[]>;
  newproject : project;
  readonly ROOT_URL:string ='http://5f9d1284.ngrok.io/api';

  constructor(private http: HttpClient) { }

  getProject()
  {
    return this.http.get<project[]>(this.ROOT_URL + '/Projects');
  }

  getArchivedProjects()
  {
    return this.http.get<project[]>(this.ROOT_URL + '/ProjectsArchived');
  }

  login()
  {
    return this.http.get<any[]>('http://5f9d1284.ngrok.io'+'/api/Account/ExternalLogin?provider=Google&response_type=token&client_id=self&redirect_uri=http%3A%2F%2Flocalhost%3A49685%2F&state=MnwXDS2Qjayf4mG-ncoNOlmFmU66-ffiifNkGsdLPgI1');
  }

  getProjectDetails(id) {
    return this.http.get(this.ROOT_URL + '/ProjectTeams/' + id);
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


  archiveProject(id:number) {
//   console.log(data.get("ProjectTitle"));

// let body = new URLSearchParams();
// //body.set('ProjectId', "1" );
// body.set('ProjectTitle', data.get("ProjectTitle") );
// body.set('ProjectDescription', data.get("ProjectDescription"));
// body.set('StartDate',data.get("StartDate") );
// body.set('EndDate',data.get("EndDate"));
// body.set('Status',"false");

let options = {
  headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
};

//console.log(this.ROOT_URL+"\n"+'/Projects/1'+"\n"+ body.toString()+"\n"+options);

    return this.http.put(this.ROOT_URL+'/ProjectsArchive/'+id,options);
    
  }


  restoreProject(id:number) {
    //   console.log(data.get("ProjectTitle"));
    
    // let body = new URLSearchParams();
    // //body.set('ProjectId', "1" );
    // body.set('ProjectTitle', data.get("ProjectTitle") );
    // body.set('ProjectDescription', data.get("ProjectDescription"));
    // body.set('StartDate',data.get("StartDate") );
    // body.set('EndDate',data.get("EndDate"));
    // body.set('Status',"false");
    
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    
    //console.log(this.ROOT_URL+"\n"+'/Projects/1'+"\n"+ body.toString()+"\n"+options);
    
        return this.http.put(this.ROOT_URL+'/ProjectsRestore/'+id,options);
        
      }

  updateProduct(data){
    return this.http.post(this.ROOT_URL + '/projects', data.toString(),);
  }


  postMember(addMembersData: project) {
    return this.http.post(this.ROOT_URL + '/ProjectTeams/1', addMembersData);
  }



  getEmployeeID() {
    return this.http.get(this.ROOT_URL + '/ProjectTeams/'); //pass id
  }

  AddEmployee(formData: project) {
    return this.http.post(this.ROOT_URL + '/ProjectTeams/'+formData.ProjectId, formData)
    
  }

  EditProject(formData: project, id: number) {
    
    return this.http.put(this.ROOT_URL + '/Projects/' + id, formData);
  }


  Delete(id:number){
    console.log(id);
  // return this.http.delete(this.ROOT_URL+ '/Project/'+data.EmployeeEmail+'/'+data.id);
   return this.http.delete(this.ROOT_URL+ '/ProjectTeamsDelete/' + id);
  }
  

} 
