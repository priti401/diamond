import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [

  // { path: '', pathMatch: 'full', redirectTo: 'login'},
  // { path: 'login', component: LoginComponent },
  {path:'', component:HeaderComponent,},
  {path:'nav', component:NavbarComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
