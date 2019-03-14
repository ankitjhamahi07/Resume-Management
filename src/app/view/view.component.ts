import { Component, AfterViewInit, OnDestroy, OnInit, ViewChild, ViewChildren  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';
import { project } from '/home/nineleaps/Desktop/rms/rms/src/app/project.model'
import { DataTableDirective} from 'angular-datatables';
import { Subject } from 'rxjs';
//import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core'
declare var $;

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  //styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnDestroy, AfterViewInit{
  
  public projects: any = [];
  //@ViewChild('productsTable') Table;
  //public dataTable: any;

  @ViewChild(DataTableDirective)
  dtOptions: Promise<DataTables.Settings> ;//= {};
  
  datatableElement: DataTableDirective;
  dtTrigger: Subject<DataTableDirective>= new Subject();
  dtInstance:DataTables.Api;
  
  constructor(private http: HttpClient, private projectService:ProjectService, private routes:Router) { }

  ngOnInit(): void {
    
    
    
      
    this.loadProjects();
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      
     dtInstance.columns().every(function () {
        const that = this;
        $('input', this.footer()).on('keyup change', function () {
          if (that.search() !== this['value']) {
            that
              .search(this['value'])
              .draw();
              
          }
        });
        
      });
      
    });
      
    // this.datatableElement.ngOnDestroy();
    // //this.dtTrigger.next();
   }

  ngAfterViewInit(): void {
    
    //this.datatableElement.ngOnDestroy();
    //this.loadProjects();
   
   
    
  }

  loadProjects(){
    this.projectService.getProject().subscribe(
        productData => {
          
          this.projects = productData;
          console.log(this.projects);
        //   this.dataTable = $(this.Table.nativeElement);
          
        //   setTimeout(()=>{this.dataTable.DataTable();}, 50);
        //  // this.dataTable.DataTable.rows( {search:'removed'} ).nodes();
       this.dtTrigger.next();

          
        }
    )
  }

  ngOnDestroy(): void {
  // // //Do not forget to unsubscribe the event
this.dtTrigger.unsubscribe();
  }

  getNavigation(link, id){
    if(id === ''){
        this.routes.navigate([link]);
    } else {
        this.routes.navigate([link + '/' + id]);
    }
}

}
