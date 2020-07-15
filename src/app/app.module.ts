import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormComponent } from "./form/form.component";
import { DisplayComponent } from "./display/display.component";
import { UserService, OnlyLoggedInUsersGuard } from "./guard/auth.guard";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormServices } from "./services/applicationform.services";
import { SuccessComponent } from "./success/success.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DisplayComponent,
    SuccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  providers: [UserService, OnlyLoggedInUsersGuard, FormServices],
  bootstrap: [AppComponent],
})
export class AppModule {}
