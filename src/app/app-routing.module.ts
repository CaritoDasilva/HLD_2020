import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnboardComponent } from './pages/onboard/onboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { MeSectionComponent } from './pages/me-section/me-section.component';

const routes: Routes = [
  { path: '', component: OnboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'me', component: MeSectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
