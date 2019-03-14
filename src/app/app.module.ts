import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';
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
import { TableModule, Table } from 'primeng/table';
import { ListempComponent } from './listemp/listemp.component';
import {ToastModule} from 'primeng/toast';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DataTableModule, SliderModule, MessageService} from 'primeng/primeng';
import { EmplistService } from './emplist.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {DropdownModule} from 'primeng/primeng';
import {MultiSelectModule} from 'primeng/multiselect'
import { SelectItem } from 'primeng/primeng';
import { ToastrModule } from 'ngx-toastr';
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
    ListempComponent,
    
  ],
  imports: [
   // AngularFireModule.initializeapp(environment.firebase),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    TableModule,
    
    BrowserAnimationsModule,
    DataTableModule,
    DropdownModule,
    MultiSelectModule,
    SliderModule,
    ToastModule,
    ToastrModule.forRoot(),
    
    
    
    //AngularFireAuthModule,
    //AngularFirestoreModule,

    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  providers: [EmpService,EmpInfoComponent,ProjectService,EmplistService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
