import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthenticationRequiredGuard } from 'src/app/helpers/guards/authentication-required.guard';
import { UnauthenticationRequiredGuard } from 'src/app/helpers/guards/unauthentication-required.guard';

const routes: Routes = [
  {
    path:'user/register',
    component: RegisterComponent,
    canActivate: [UnauthenticationRequiredGuard]
  },
  {
    path:'user/login',
    component: LoginComponent,
    canActivate: [UnauthenticationRequiredGuard]
  },
  {
    path:'user/logout',
    component: LogoutComponent,
    canActivate: [AuthenticationRequiredGuard]
  },
  {
    path:'user/reset',
    component: ResetPasswordComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
