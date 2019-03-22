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
import { PiechartComponent } from './piechart/piechart.component';
import {ChartModule} from 'primeng/chart';
import { DashComponent } from './dash/dash.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatDialogModule } from '@angular/material';
import { ContactComponent } from './contact/contact.component';
import {TooltipModule} from 'primeng/tooltip';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {DragDropModule} from 'primeng/dragdrop';
import {PickListModule} from 'primeng/picklist';
import { ArchivedComponent } from './archived/archived.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import {AngularFireModule} from '@angular/fire';
//import {AngularFireDatabaseModule} from 'angularfire2/database';
//import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';
import { AuthService } from "src/app/auth.service";
import { AngularFireAuth } from '@angular/fire/auth';
import { PrjDetailsComponent } from './prj-details/prj-details.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
//import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';

export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  storageBucket: "",
  messagingSenderId: ""
};

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
    DashComponent,
    ListempComponent,
    PiechartComponent,
    MyNavComponent,
    ContactComponent,
    ArchivedComponent,
    NotFoundComponentComponent,
    LoginComponent,
    PrjDetailsComponent,
    EditProjectComponent,
    
    
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    //AngularFireAuth,
    AngularFireAuthModule,
   // AngularFirestoreModule,
    //AngularFirestore,
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
    ChartModule,
    LayoutModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    TooltipModule,
    ProgressSpinnerModule,
    PickListModule,
    
   // AngularFireDatabaseModule,
    //AngularFireModule.initializeApp(firebaseConfig),
    

    
  ],
  entryComponents:[
    PrjDetailsComponent,
    EditProjectComponent

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  providers: [EmpService,EmpInfoComponent,ProjectService,EmplistService,MessageService,AuthService,AngularFireAuth, AngularFireAuthModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
