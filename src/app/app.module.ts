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
import { ProjectService } from './project.service';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ReadComponent } from './read/read.component';
@NgModule({
  declarations: [
    AppComponent,
    EmpInfoComponent,
    EditUserComponent,
    ContactusComponent,
    ViewComponent,
    CreateComponent,
    UpdateComponent,
    ReadComponent,
    
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
