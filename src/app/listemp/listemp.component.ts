import { NgModule, Component, OnInit, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { EmplistService } from '/home/nineleaps/Desktop/rms/rms/src/app/emplist.service'
import { Emplist } from '/home/nineleaps/Desktop/rms/rms/src/app/emplist.model'
import {TableModule} from 'primeng/table';
import { SelectItem } from 'primeng/primeng';
import {MessageService} from 'primeng/api';
import { MultiSelectModule } from 'primeng/multiselect';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-listemp',
  templateUrl: './listemp.component.html',
  styleUrls: ['./listemp.component.css'],
 
})
export class ListempComponent implements OnInit {

  emp: Emplist[];
  constructor(private emplist: EmplistService, private toastr:ToastrService) { }
  cols: any;

  tech: SelectItem[];

  name: SelectItem[];

  yearFilter: number;

  yearTimeout: any;

  showSuccess() {
    this.toastr.success('Successfully loaded Data');
  }

  ngOnInit() {
    this.getAllProjects();


    this.tech = [
      { label: 'All Description', value: null },
      { label: 'Test', value: 'To create a map' },
      { label: '5', value: 'Kuch bhi' }
  ];

  this.name = [
    { label: 'All Name', value: null },
    { label: 'Test', value: 'Test' },
    { label: 'Ford', value: 'Ford' }
];
   
  this.cols = [
      { field: 'ProjectId', header: 'ID' },
      { field: 'ProjectTitle', header: 'Title' },
      { field: 'ProjectDescription', header: 'Description' },
      { field: 'StartDate', header: 'Start Date' },
      { field: 'EndDate', header: 'End Date' }
  ];
  }

  getAllProjects()
  {
    console.log("hey");
    this.emplist.getProjectList().subscribe(
      data => {
        this.emp=data;
        console.log(data);
        this.showSuccess();
        
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



}
