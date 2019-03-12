import { Component, OnInit, ViewChild, Input, EventEmitter, Output, ElementRef, ViewChildren } from '@angular/core';
import { ProjectService } from '/home/nineleaps/Desktop/rms/rms/src/app/project.service';
import { Router } from '@angular/router';  
import { NgForm } from '@angular/forms'; 
import { project } from '/home/nineleaps/Desktop/rms/rms/src/app/project.model'
import { ProjectListComponent } from '/home/nineleaps/Desktop/rms/rms/src/app/project-list/project-list.component';

@Component({
  selector: 'app-project-update',
  templateUrl: './project-update.component.html',
  styleUrls: ['./project-update.component.css']
})

export class ProjectUpdateComponent implements OnInit 
{

  constructor(private dataservice:ProjectService,private route:Router) {  
  }  

  @Output() nameEvent = new EventEmitter<string>();  
  @ViewChildren('closeBtn') cb: ElementRef;  
  ngOnInit() {  
   
  }  

  @Input() reset:boolean = false;

  @ViewChildren('regForm') myForm: NgForm;  

  @Input() isReset: boolean = false;  

  objtempproject:project=new project();  
  
  @Input() objproject :project = new project(); 

  EditEmployee(regForm:NgForm)  
  {  
    this.dataservice.EditProject(this.objproject).subscribe(res=>  
      {  
      alert("Project updated successfully");  
      this.nameEvent.emit("ccc");  
    this.cb.nativeElement.click();  
       
      },  
    );

}
}
