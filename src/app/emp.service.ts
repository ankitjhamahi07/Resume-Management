import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { emp } from './emp.model';
import {Tech} from 'src/app/tech.model';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  formData: emp;

  constructor(private http: HttpClient) { }  
  baseUrl: string = 'http://c4a8145f.ngrok.io/api'; 

  updateEmployeeDetails(formData:emp,id:number){
    console.log(id);
    console.log(formData);
    return this.http.put(this.baseUrl + '/Employees/' + id, this.formData);
  }

  getEmployeeById(id: number) {  
    return this.http.get<any>(this.baseUrl + '/Employees/' + id);  
  }  

  getEmployee()
  {
    return this.http.get<any>(this.baseUrl+'/Employees')
  }

  getEmployeeTechCount()
  {
    return this.http.get<any>(this.baseUrl+'/EmployeeTechCount'); 
  }

  getEmployeeProjectDetails(id:number)
  { 
    return this.http.get<any>(this.baseUrl+'/Employees/ProjectDetails/'+id);

  }

  getEmployeeList()
  {
    return this.http.get<any>(this.baseUrl+'/EmployeeList')
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
