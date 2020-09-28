import { environment } from './../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './conponents/home/home.component';
import { NavbarComponent } from './conponents/navbar/navbar.component';
import { HeroComponent } from './conponents/hero/hero.component';
import { LoginComponent } from './conponents/user/login/login.component';
import { RegisterComponent } from './conponents/user/register/register.component';
import { ProfileComponent } from './conponents/user/profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFireModule} from '@angular/fire';

//SERVICIOS
import { DataApiService } from './services/data-api.service';
import { NotaComponent } from './conponents/nota/nota.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeroComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    NotaComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
