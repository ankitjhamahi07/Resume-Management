import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from '/home/nineleaps/Desktop/rms/rms/src/app/contactus/contactus.component'
import { EditUserComponent } from '/home/nineleaps/Desktop/rms/rms/src/app/edit-user/edit-user.component'
import { EmpInfoComponent } from './emp-info/emp-info.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ReadComponent } from './read/read.component';
import { ViewComponent } from './view/view.component';


export const routes: Routes = [
  
 
  {path: '', component: ViewComponent, pathMatch:'full'},

  {path: 'create', 
  component: CreateComponent},

  {path: 'update/:id', 
  component: UpdateComponent},

  {path: 'view/:id', 
  component: ReadComponent},

  {path: 'view', 
  component: ViewComponent},
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
