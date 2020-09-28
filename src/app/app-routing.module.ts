import { RegisterComponent } from './conponents/user/register/register.component';
import { LoginComponent } from './conponents/user/login/login.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch:'full'},
  { path: 'home',
    loadChildren: () => import('./conponents/home/home.module').then(m => m.HomeModule)
  },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule {}
