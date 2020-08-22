import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnboardComponent } from './pages/onboard/onboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: 'onboard', component: OnboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
