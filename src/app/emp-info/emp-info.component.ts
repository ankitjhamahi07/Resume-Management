import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { emp } from '../emp.model';
import { EmpService } from '../emp.service';


@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css']
})
export class EmpInfoComponent implements OnInit {

  employee: emp;
  isLoadingResults: boolean;
  

  constructor( private details: EmpService) { }

  ngOnInit() {

     
    this.getEmployeeDetails(1);
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
    this.details.getEmployeeById(2)
      .subscribe(data => {
        this.employee = data;
        
        console.log(this.employee.EmployeeName);
        console.log(this.employee.EmployeeEmail);
        console.log(this.employee.EmployeePhone);
        this.isLoadingResults = false;
      });
  }

}
