import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { DisplayComponent } from './display/display.component';
import { OnlyLoggedInUsersGuard } from './guard/auth.guard';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'form',
    pathMatch: 'full'
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'display',
    component: DisplayComponent,
    canActivate: [OnlyLoggedInUsersGuard]
  },
  {
    path: 'success',
    component: SuccessComponent,
    canActivate: [OnlyLoggedInUsersGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
