import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Injectable } from '@angular/core';
import { Emplist } from '/home/nineleaps/Desktop/rms/rms/src/app/emplist.model'

@Injectable({
  providedIn: 'root'
})
export class EmplistService {

  constructor(private http: HttpClient) { }

  readonly baseUrl: string = "http://e00b0fc1.ngrok.io/api"
  getProjectList()
  {
    return this.http.get<Emplist[]>(this.baseUrl+'/Projects')
                    
  }
}
