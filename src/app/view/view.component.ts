import { Component, OnInit, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';
import { project } from '/home/nineleaps/Desktop/rms/rms/src/app/project.model'

declare var $;

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  public projects: any = [];
  @ViewChild('productsTable') Table;
  public dataTable: any;
  
  constructor(private projectService:ProjectService, private routes:Router) { }

  ngOnInit() {

    this.loadProjects();
  }

  loadProjects(){
    this.projectService.getProject().subscribe(
        productData => {
          this.projects = productData;
          this.dataTable = $(this.Table.nativeElement);
          setTimeout(()=>{this.dataTable.DataTable();}, 50);
        }
    );
  }

  getNavigation(link, id){
    if(id === ''){
        this.routes.navigate([link]);
    } else {
        this.routes.navigate([link + '/' + id]);
    }
}

}
