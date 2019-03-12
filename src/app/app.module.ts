import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpInfoComponent } from './emp-info/emp-info.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import {HttpClientModule} from '@angular/common/http';
import { EmpService } from './emp.service';
import { environment } from '../environments/environment';
import { ContactusComponent } from './contactus/contactus.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectUpdateComponent } from 'src/app/project-list/project-update/project-update.component';
import { ProjectService } from './project.service';
@NgModule({
  declarations: [
    AppComponent,
    EmpInfoComponent,
    EditUserComponent,
    ContactusComponent,
    ProjectListComponent,
    ProjectUpdateComponent,
    
  ],
  imports: [
   // AngularFireModule.initializeapp(environment.firebase),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    //AngularFireAuthModule,
    //AngularFirestoreModule,

    
  ],
  providers: [EmpService,EmpInfoComponent,ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
