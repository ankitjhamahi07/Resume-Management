import { NgModule, Component, OnInit, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { EmplistService } from '/home/nineleaps/Desktop/rms/rms/src/app/emplist.service'
import { Emplist } from '/home/nineleaps/Desktop/rms/rms/src/app/emplist.model'
import {TableModule} from 'primeng/table';
import { SelectItem } from 'primeng/primeng';
import {MessageService} from 'primeng/api';
import { MultiSelectModule } from 'primeng/multiselect';
import {ToastrService} from 'ngx-toastr';
import { emp } from '../emp.model';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-listemp',
  templateUrl: './listemp.component.html',
  styleUrls: ['./listemp.component.css'],
 
})
export class ListempComponent implements OnInit {

  employee: Emplist;
  loading: boolean;

  selectedCars: Emplist[];

  constructor(private emplist: EmplistService, private toastr:ToastrService, private router:Router) { }
  cols: any;

  tech: SelectItem[];

  role: SelectItem[];
  
  name: any;

  yearFilter: number;

  yearTimeout: any;

  showSuccess() {
    this.toastr.success('Successfully loaded Data');
  }

  ngOnInit() {
    this.getAllProjects();

   // 'Angular', 'Dot Net', 'Python', 'Java', 'C', 'C#', 'Big Data'
   // This is used for filter
    this.tech = [
      { label: 'All Description', value: null },
      { label: 'Angular', value: 'Angular' },
      { label: '.net', value: 'Dot Net' },
      { label: 'Python', value: ' Python' },
      { label: 'Java', value: ' Java' },
      { label: 'C#', value: ' C#'},
      { label: 'C', value: ' C'},
      { label: 'Big Data', value: 'Big Data'},
      
      
  ];

  this.role= [
    { label: 'All Roles', value: null },
    { label: 'Backend', value: 'Back End' },
    { label: 'Frontend', value: 'Front End' },
    { label: 'Scrum Master', value: 'Scrum Master' }
];
   
  this.cols = [
      { field: 'EmployeeId', header: 'ID' },
      { field: 'EmployeeName', header: 'Name' },
      { field: 'ProjectTitle', header: 'Project Title' },
      { field: 'Role', header: 'Role' },
      { field: 'EmployeeTech', header: 'Skill' }
  ];
  this.loading=true;
  }

  getAllProjects()
  {
    console.log("hey");
    this.emplist.getEmployeeList().subscribe(
      data => {
        this.employee=data;
        console.log(data);
        this.showSuccess();
        this.loading=false;
        
      }
      , err =>
      {
        if(err.status==404)
        {
          this.router.navigateByUrl('/404', {replaceUrl: true});
        }
      }
    )
  }

  onYearChange(event, dt) {
    if (this.yearTimeout) {
        clearTimeout(this.yearTimeout);
    }

    this.yearTimeout = setTimeout(() => {
        dt.filter(event.value, 'year', 'gt');
    }, 250);
}

goToEmployeeDetails(id) {
  console.log(id);
  this.router.navigate(['/empInfo', id]);
}

goToEmployeeContact(id) {
  console.log(id);
  this.router.navigate(['/contact', id]);
}



}
