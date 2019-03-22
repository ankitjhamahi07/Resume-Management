import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { emp } from './emp.model';

@Injectable({
  providedIn: 'root'
})
export class EmpService {


  constructor(private http: HttpClient) { }  
  baseUrl: string = 'http://5f9d1284.ngrok.io/api'; 

  getEmployeeById(id: number) {  
    return this.http.get<any>(this.baseUrl + '/Employees/' + id);  
  }  

  getEmployee()
  {
    return this.http.get<any>(this.baseUrl+'/Employees')
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
