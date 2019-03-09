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
@NgModule({
  declarations: [
    AppComponent,
    EmpInfoComponent,
    EditUserComponent,
    
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
  providers: [EmpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
