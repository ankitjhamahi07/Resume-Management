import { Component, OnInit,ViewChildren, Input, EventEmitter, Output, ElementRef} from '@angular/core';
import { project } from '/home/nineleaps/Desktop/rms/rms/src/app/project.model';
import { ProjectService } from '/home/nineleaps/Desktop/rms/rms/src/app/project.service'
import { Router } from '@angular/router'
import { ProjectUpdateComponent } from '/home/nineleaps/Desktop/rms/rms/src/app/project-list/project-update/project-update.component'


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projectList : project[];
  dataavailable: Boolean = false;
  temppro= project;
  //objproject: project;

  constructor(private dataservice:ProjectService,private route :Router) { 


  }

  ngOnInit() {
    this.LoadData();
  }

  LoadData() {  
    this.dataservice.getProject().subscribe((tempdate) => {  
      this.projectList = tempdate;  
      console.log(this.projectList);  
      if (this.projectList.length > 0) {  
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

  RefreshData() {  
    this.LoadData();  
  }  

  loadAddNew()
  {

  }

  @ViewChildren('regForm') editcomponent: ProjectUpdateComponent;
  objproject:project = new project();
  loadnewForm(id: number, title: string, description: string, startdate: Date, enddate: Date) {  
    
    //console.log(typeof(this.editcomponent.objproject.ProjectId));

    
    try {

    //this.editcomponent.objtempproject.ProjectId=1;
    this.editcomponent.objproject.ProjectId = 1 
    this.editcomponent.objproject.ProjectTitle= title  
    this.editcomponent.objproject.ProjectDescription = description
    this.editcomponent.objproject.StartDate = startdate
    this.editcomponent.objproject.EndDate = enddate
  }  
  catch(e)
  {
    console.log(e)
  } 

}
}
