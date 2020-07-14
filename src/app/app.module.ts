import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { DisplayComponent } from './display/display.component';
import { UserService, OnlyLoggedInUsersGuard } from './guard/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormServices } from './services/applicationform.services';
import { SuccessComponent } from './success/success.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DisplayComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService, OnlyLoggedInUsersGuard, FormServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
