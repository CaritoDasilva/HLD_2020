import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnboardComponent } from './pages/onboard/onboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './pages/home/home.component';
import { HorizontalScrollComponent } from './components/horizontal-scroll/horizontal-scroll.component';
import { MeSectionComponent } from './pages/me-section/me-section.component';

// iconos
import {
  faClock
} from '@fortawesome/free-regular-svg-icons';
import {
  faEllipsisV
} from '@fortawesome/free-solid-svg-icons';
  import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { CommunityComponent } from './pages/community/community.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NavbarComponent } from './component/navbar/navbar.component'

@NgModule({
  declarations: [
    AppComponent,
    OnboardComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HorizontalScrollComponent,
    MeSectionComponent,
    TopNavbarComponent,
    CommunityComponent,
    ProfileComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary){
    library.addIcons(faClock, faEllipsisV)
  }
}
