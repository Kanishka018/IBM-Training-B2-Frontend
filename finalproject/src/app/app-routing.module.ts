import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CheckeligibilityComponent } from './checkeligibility/checkeligibility.component';
import { EmicalcComponent } from './emicalc/emicalc.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'About us', component:AboutusComponent},
  {path:'login', component : LoginComponent},
  {path:'checkeligibility', component:CheckeligibilityComponent},
  {path:'emicalc', component:EmicalcComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
