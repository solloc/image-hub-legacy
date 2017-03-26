import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'file-upload', component: FileUploadComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
