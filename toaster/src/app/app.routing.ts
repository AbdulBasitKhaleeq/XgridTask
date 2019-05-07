import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGardService } from './services/auth-gard.service';

// Import Containers
// import { DefaultLayoutComponent } from './containers';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',

  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGardService],
    data: {
      title: 'Home Page'
    }
  },

  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  }
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
