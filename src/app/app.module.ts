import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { IntroComponent } from './pages/intro/intro.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { ModulesComponent } from './pages/modules/modules.component';
import { HttpModuleComponent } from './pages/http-module/http-module.component';
import { FileSystemComponent } from './pages/file-system/file-system.component';
import { UrlModuleComponent } from './pages/url-module/url-module.component';
import { NpmComponent } from './pages/npm/npm.component';
import { EventsComponent } from './pages/events/events.component';
import { UploadFilesComponent } from './pages/upload-files/upload-files.component';
import { EmailComponent } from './pages/email/email.component';
import { CongratulationsComponent } from './pages/congratulations/congratulations.component';
import { SidebarComponent } from './other/sidebar/sidebar.component';

import { LoginComponent } from './other/login/login.component';

import { HttpClientModule } from '@angular/common/http'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './other/signup/signup.component';
import { HeaderComponent } from './other/header/header.component';

import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroComponent,
    GetStartedComponent,
    ModulesComponent,
    HttpModuleComponent,
    FileSystemComponent,
    UrlModuleComponent,
    NpmComponent,
    EventsComponent,
    UploadFilesComponent,
    EmailComponent,
    CongratulationsComponent,
    SidebarComponent,
    SignupComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      "radius": 60,
      "space": -10,
      "outerStrokeGradient": true,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#05ff22",
      "outerStrokeGradientStopColor": "#1c8000",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 10,
      "title": "UI",
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": false,
      "showBackground": false,
      "clockwise": false,
      "startFromZero": false,
      "lazy": true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
