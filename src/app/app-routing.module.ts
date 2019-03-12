import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from '/home/nineleaps/Desktop/rms/rms/src/app/contactus/contactus.component'
import { EditUserComponent } from '/home/nineleaps/Desktop/rms/rms/src/app/edit-user/edit-user.component'
import { EmpInfoComponent } from './emp-info/emp-info.component';


export const routes: Routes = [
  {
      path: 'home',
      component: EmpInfoComponent
  },
  {
      path: 'edit',
      component: EditUserComponent
  },
  {
      path: 'contact',
      component: ContactusComponent
  },
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
  },
  {
      path: '**',
      redirectTo: '/home',
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
