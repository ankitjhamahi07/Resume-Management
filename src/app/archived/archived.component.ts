import { Component, AfterViewInit, OnDestroy, OnInit, ViewChild, ViewChildren  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';
import { project } from '../project.model';
import { DataTableDirective} from 'angular-datatables';
import { Subject } from 'rxjs';
//import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import{ToastrService} from 'ngx-toastr'
declare var $;

@Component({
  selector: 'app-archived',
  templateUrl: './archived.component.html',
  styleUrls: ['./archived.component.css']
})
export class ArchivedComponent implements OnInit {

  public projects: any = [];
  

  @ViewChild(DataTableDirective)
  dtOptions: DataTables.Settings;//= {};
  
  datatableElement: DataTableDirective;
  dtTrigger: Subject<DataTableDirective>= new Subject();
  dtInstance:DataTables.Api;
  
  constructor(private http: HttpClient, private projectService:ProjectService,
    private toastr:ToastrService, private routes:Router) { }

  ngOnInit(): void {
    
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    
      
    this.loadProjects();
    // this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      
    //  dtInstance.columns().every(function () {
    //     const that = this;
    //     $('input', this.footer()).on('keyup change', function () {
    //       if (that.search() !== this['value']) {
    //         that
    //           .search(this['value'])
    //           .draw();
              
    //       }
    //     });
        
    //   });
      
    // });
      
    // this.datatableElement.ngOnDestroy();
    // //this.dtTrigger.next();
   }

  ngAfterViewInit(): void {
    
    //this.datatableElement.ngOnDestroy();
    //this.loadProjects();
   
   
    
  }

  loadProjects(){
    this.projectService.getArchivedProjects().subscribe(
        productData => {
          
          this.projects = productData;
          console.log(this.projects);
          this.toastr.success("All archived projects loaded",'' ,{ timeOut: 1000});
        //   this.dataTable = $(this.Table.nativeElement);
          
        //   setTimeout(()=>{this.dataTable.DataTable();}, 50);
        //  // this.dataTable.DataTable.rows( {search:'removed'} ).nodes();
       // this.dtTrigger.unsubscribe();
       this.dtTrigger.next();

          
        }
    )
  }

  restoreProject(id:number)
  {
    this.projectService.restoreProject(id).subscribe(
      productData => {
        
        this.projects = productData;
        console.log(this.projects);
      //   this.dataTable = $(this.Table.nativeElement);
        
      //   setTimeout(()=>{this.dataTable.DataTable();}, 50);
      //  // this.dataTable.DataTable.rows( {search:'removed'} ).nodes();
             //this.dtTrigger.unsubscribe();
            // this.dtTrigger.next();
             this.toastr.success("Yay! Your project has been restored",'All the best', {timeOut: 2000});
             this.dtTrigger.unsubscribe();
             this.loadProjects();
  
        
      }
  )

  }



  ngOnDestroy(): void {
  // // //Do not forget to unsubscribe the event
this.dtTrigger.unsubscribe();
  }

 
}
