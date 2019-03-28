import { Component, OnInit, Inject, ViewChild, ChangeDetectorRef, ɵConsole } from '@angular/core';
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
  model: any = {};
  errorMessage: any;
  tech:string[]=['Angular', 'Dot Net', 'Python', 'Java', 'C', 'C#', 'Big Data'];
  SelectedTech: String;
  start:Date;
  end:Date;
  @ViewChild('f') form;
  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }
  panelOpenState = false;
  projectDtl: project[];
  dataavailable: Boolean = false;
  projectDescription: string;
  projectid:number;
  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<PrjDetailsComponent>,
    private dataservice: ProjectService,
    private toaster: ToastrService,
    private dialog:MatDialog,
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
    //console.log(id);
    this.dataservice.getProjectDetails(id).subscribe((tempdata) => {
      //console.log(tempdata);
      this.projectDtl = tempdata as project [];
      //console.log(this.project.projectId)
     // console.log(this.projectDtl);
      this.projectDescription = this.projectDtl[0].ProjectDescription;
      this.projectid=this.projectDtl[0].ProjectId;
      if(this.projectDescription=='')
      {
        this.toaster.error("No members yet");
      }
      console.log(this.projectDescription);
      if (this.projectDtl.length > 0) {
        this.dataavailable = true;
      }
      else {
        this.dataavailable = false;
        this.toaster.error("Data is not available for this project.");
        console.log("No");
      }
    },
    
    )
      
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

  AddMemberToProject(form: NgForm) {

    
    //console.log(this.SelectedTech);
   // this.SelectedTech=form.value.EmployeeTech;
    form.value.EmployeeTech=this.SelectedTech;
    form.value.EmployeeStartDate=this.start;
    form.value.EmployeeEndDate=this.end;
    console.log(form.value.EmployeeEmail);
    console.log(form.value.EmployeeTech);
    console.log(form.value);
    this.dataservice.AddEmployee(form.value).subscribe(res => {
     // console.log(res.toString());
     //this.resetForm(form);
     this.toaster.success("Employee Added");
     //this.dialogRef.close();
     
     //this.dialogRef.updatePosition();
     //console.log(this.data);
     //this.dialog.open(this.data);
     //this.view(form.value.projectId);
     this.ngOnInit();
    // this.LoadDataToProjectDetails(this.data);
     
    },
      err => {
        //this.ShowFail();
       // this.resetForm(form);
       //this.toaster.error("Email is invalid");
        //console.log("email invalid First  line");
        this.toaster.error();
        //console.log("email invalid last  line");

      }
    );
    this.LoadDataToProjectDetails(this.data);
    //put toaster for successfull addition
    // this.showSuccess();

  }

  

  DeleteFromProject(pId:number, id:number) {

     //let pId=this.projectid;
    console.log(id);
    console.log("PID"+pId);
    this.dataservice.Delete(pId, id).subscribe(res => {
      this.ngOnInit();
      console.log("Deleted successfully!");
      this.toaster.success("Employee deleted from Project");
    })
    this.LoadDataToProjectDetails(this.data);
  }

}
