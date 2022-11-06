import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path: "header" , component : HeaderComponent},
  { path: "add" , component: AddRestoComponent},
  { path:"list" , component: ListComponent},
  {path: "update/:id" , component: UpdateComponent},
  {path: "login" , component: LoginComponent},
  {path:"register" , component:RegisterComponent},
  {path:"footer" , component: FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
