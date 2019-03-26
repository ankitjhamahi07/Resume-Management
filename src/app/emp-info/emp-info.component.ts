import { Component, OnInit, OnDestroy } from '@angular/core';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { emp } from '../emp.model';
import { EmpService } from '../emp.service';
import { ActivatedRoute, Router, Routes} from '@angular/router';
import {DashComponent} from '/home/nineleaps/Desktop/rms/rms/src/app/dash/dash.component';
import { project } from '../project.model';



@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css']
})
export class EmpInfoComponent implements OnDestroy, OnInit {

  employee: emp;
  isLoadingResults: boolean;
  viewId:number;
  empProjects:project;
  private sub:any;
  e:emp;
  

  constructor( private details: EmpService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.viewId = +params['id']; 
     
    
  });
  this.getEmployeeDetails(this.viewId);
  this.getEmployeeProjectDetails(this.viewId);
  
}

  downloadPDF()
  {
  var data = document.getElementById('resume');
html2canvas(data).then(canvas => {
// Few necessary setting options
var imgWidth = 370;
var pageHeight = 370;
var imgHeight = canvas.height * imgWidth / canvas.width;
var heightLeft = imgHeight;
 
const contentDataURL = canvas.toDataURL('image/png')
let pdf = new jsPDF('p', 'mm', 'a2'); // A4 size page of PDF
var position = 0;
pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
pdf.save(this.employee.EmployeeName+'_Resume.pdf'); // Generated PDF
});
  }


  getEmployeeDetails(id:number) {
  
    this.details.getEmployeeById(id)
      .subscribe(data => {
        this.e=data;
        this.employee = this.e;
        
        
        console.log(this.employee[0]);
        //console.log(data.EmployeeDesignation);
        this.isLoadingResults = false;
      });
  }

  getEmployeeProjectDetails(id:number)
  {


    this.details.getEmployeeProjectDetails(id)
      .subscribe(data => {
        this.empProjects=data;
        //this.employee = this.e;
        
        
        console.log(this.empProjects);
        //console.log(data.EmployeeDesignation);
        this.isLoadingResults = false;
      });

  }

  ngOnDestroy()
  {

    this.sub.unsubscribe();

  }

}
