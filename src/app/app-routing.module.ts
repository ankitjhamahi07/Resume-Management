import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from '/home/nineleaps/Desktop/rms/rms/src/app/contactus/contactus.component'
import { EditUserComponent } from '/home/nineleaps/Desktop/rms/rms/src/app/edit-user/edit-user.component'
import { EmpInfoComponent } from './emp-info/emp-info.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ReadComponent } from './read/read.component';
import { ViewComponent } from './view/view.component';
import { PiechartComponent } from './piechart/piechart.component';
import { ListempComponent } from './listemp/listemp.component';
import { DashComponent } from './dash/dash.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ArchivedComponent } from './archived/archived.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { LoginComponent } from './login/login.component';


export const appRoutes: Routes = [
  
 
  {
    path:'',
    component:LoginComponent
  },
  
  
  {
    path: 'empInfo',
       component: EmpInfoComponent
  },
  {
    path: 'empInfo/:id',
       component: EmpInfoComponent
  },
  {
    path: 'signin',
    component:LoginComponent
  },
  {path: 'piechart', 
  component: PiechartComponent},

  {path: 'create', 
  component: CreateComponent},

  {path: 'update/:id', 
  component: UpdateComponent},
  
  {path: 'view', 
  component: ViewComponent},

  {path: 'archived', 
  component: ArchivedComponent},

  {
    path: 'listemp',
    component: ListempComponent
  },
  {
        path: 'contact',
         component: ContactusComponent
  },

{
    path: 'contact/:id',
     component: ContactComponent
},

{ path: '404', component: NotFoundComponentComponent },
{ path: '**', redirectTo: '404' }
  
];
 
//     {
//       path: 'home',
//       component: EmpInfoComponent
//   },
//   {
//       path: 'edit',
//       component: EditUserComponent
//   },
//   {
//       path: 'contact',
//       component: ContactusComponent
//   },
//   {
//       path: '',
//       redirectTo: '/home',
//       pathMatch: 'full'
//   },
//   {
//       path: '**',
//       redirectTo: '/home',
//       pathMatch: 'full'
//   }
// ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
