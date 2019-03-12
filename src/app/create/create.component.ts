import { Component, OnInit, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';
import { project } from '/home/nineleaps/Desktop/rms/rms/src/app/project.model'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  productForm:FormGroup;

  constructor(private fb: FormBuilder, private projectService:ProjectService,
    private routes:Router) {

      this.productForm = this.fb.group({
        name: ['', Validators.required],
        desc: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(1000)])],
        sdate: ['', Validators.compose([Validators.required])],
        edate: ['', Validators.compose([Validators.required])],
      });
     }


    

  ngOnInit() {
  }
saveProduct(values){ 

  
  
    const productData = new FormData();
    productData.append('ProjectTitle', values.name);
    productData.append('ProjectDescription', values.desc);
    productData.append('StartDate', values.sdate);
    productData.append('EndDate', values.edate);  
    console.log(productData.get("StartDate"));
    this.projectService.createProject(productData).subscribe(result => {
      this.routes.navigate(['']);
    });
  }

}
