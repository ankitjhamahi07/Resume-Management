import { Component, OnInit, Inject, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
//import { MatDialog, MatDialogConfig,MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';
import {project} from 'src/app/project.model';
//import { projectDetails } from "../projectDetails";
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
//import { emp } from '../emp.model';

@Component({
  selector: 'app-prj-details',
  templateUrl: './prj-details.component.html',
  styleUrls: ['./prj-details.component.css'],

})
export class PrjDetailsComponent implements OnInit {

  employee: project;
  state: string = 'small';
  errorMessage: any;
  @ViewChild('f') form;
  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }
  panelOpenState = false;
  projectDtl: project[];
  dataavailable: Boolean = false;
  projectDescription: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<PrjDetailsComponent>,
    private dataservice: ProjectService,
    private toaster: ToastrService
  ) { }
  ngOnInit() {
    this.LoadDataToProjectDetails(this.data);
    this.LoadEmployeeID();
    console.log(this.data);
    // this.AddMemberToProject(this.form,id);
    //this.resetForm();
  }

  // resetForm(form?: NgForm) {   //Optional ?
  //   if (form != null) {
  //     form.resetForm();
  //   }
  //   this.dataservice.formData = {
  //     // ProjectId: null,
  //     EmployeeName: "",
  //     EmployeeEmail: "",
  //     EmployeeTech: "",
  //     Role: "",
  //     EmployeeStartDate: null,
  //     EmployeeEndDate: null
  //   }
  // }




  LoadDataToProjectDetails(id: number) {
    console.log(id);
    this.dataservice.getProjectDetails(id).subscribe((tempdata) => {
      console.log(tempdata);
      this.projectDtl = tempdata as project [];
      console.log(this.projectDtl);
      this.projectDescription = this.projectDtl[0].ProjectDescription;
      if (this.projectDtl.length > 0) {
        this.dataavailable = true;
      }
      else {
        this.dataavailable = false;
        console.log("No");
      }
    }
    )
      , err => {
        console.log(err);
        console.log("SERVER");
      }
  }
  AddMember(form: NgForm) {
    // Save(form: NgForm) {
    //   this.details.postEmp(form.value).subscribe(res => {
    //     this.resetForm(form);
    //   });
    // }
    this.dataservice.postMember(form.value).subscribe(res => {
      //add something here
    })
  }

  LoadEmployeeID() {
    this.dataservice.getEmployeeID().subscribe(res => {
      console.log(res);
    })
  }

  ShowFail() {
    this.toaster.error('Check the details', 'Major Error');
  }
  showSuccess() {
    this.toaster.success('Data is successfully loaded', 'Data stored!');
  }

  AddMemberToProject(form: NgForm, id: number) {
    console.log(form.value);
    this.dataservice.AddEmployee(form.value).subscribe(res => {
      console.log(res.toString());
     // this.resetForm(form);
    },
      err => {
        this.ShowFail();
       // this.resetForm(form);
        console.log("email invalid First  line");
        console.log(err);
        console.log("email invalid last  line");

      }
    );
    this.LoadDataToProjectDetails(this.data);
    //put toaster for successfull addition
    // this.showSuccess();

  }

  DeleteFromProject(id:number) {
    console.log(id);
    this.dataservice.Delete(id).subscribe(res => {
      console.log("Deleted successfully!");
    })
    //this.LoadDataToProjectDetails(this.data);
  }

}
