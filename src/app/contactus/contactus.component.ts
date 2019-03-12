//import { Component, OnInit } from '@angular/core';
import { Component, ɵConsole } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {

  title = 'Contact Us ';
  public data:any=[]
  form:Form;
  
  constructor(private http: HttpClient){
  }
 
  save(name, email, mobile, subject, message): void {
    
    var email1 ="ankitjhamahi.07@gmail.com";
    var body = {
      bname : name,
      bemail : email1,
      bmobile : mobile,
      bsubject : subject,
      message : message
    }
    // this.data['name']= name;
    //             this.data['email']= email;
    //             this.data['mobile']= mobile;
    //             this.data['subject']= subject;
    //             this.data['message']= message;
    console.log(this.data);
    console.log(body);
    //add request to send email or into mysql
    this.http.post<any>('http://a14e3b9c.ngrok.io/api/Contact', body).subscribe(
        res => {
          console.log(res);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occurred.");
        }
      });
   }

  //  onSubmit(form:ngForm)
  //  {
  //    this.form.reset();
  //  }
}


