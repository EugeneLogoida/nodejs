import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CongratulationsComponent } from './pages/congratulations/congratulations.component';
import { EmailComponent } from './pages/email/email.component';
import { EventsComponent } from './pages/events/events.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { FileSystemComponent } from './pages/file-system/file-system.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpModuleComponent } from './pages/http-module/http-module.component';
import { IntroComponent } from './pages/intro/intro.component';
import { LoginComponent } from './other/login/login.component';
import { ModulesComponent } from './pages/modules/modules.component';
import { NpmComponent } from './pages/npm/npm.component';
import { UploadFilesComponent } from './pages/upload-files/upload-files.component';
import { UrlModuleComponent } from './pages/url-module/url-module.component';
import { SignupComponent } from './other/signup/signup.component';

const routes: Routes = [
  { path:'', pathMatch: 'full', redirectTo:'home' },
  { path: 'congratulations', component: CongratulationsComponent },
  { path: 'email', component: EmailComponent },
  { path: 'events', component: EventsComponent },
  { path: 'file-system', component: FileSystemComponent },
  { path: 'get-started', component: GetStartedComponent },
  { path: 'home', component: HomeComponent },
  { path: 'http-module', component: HttpModuleComponent },
  { path: 'intro', component: IntroComponent },
  { path: 'modules', component: ModulesComponent },
  { path: 'npm', component: NpmComponent },
  { path: 'upload-files', component: UploadFilesComponent },
  { path: 'url-module', component: UrlModuleComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignupComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
