import { FormsModule } from '@angular/forms';
import { AlunosModule } from './alunos/alunos.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing.module';
import { CursosModule } from './cursos/cursos.module';
import { AuthService } from './login/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
   ],
  imports: [
    BrowserModule,
    CursosModule,
    AlunosModule,
    AppRoutingModule,
    FormsModule
   ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
