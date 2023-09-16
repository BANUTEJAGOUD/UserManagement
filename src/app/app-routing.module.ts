import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { ErrorcomponentComponent } from './components/errorcomponent/errorcomponent.component';
import { AuthGuard } from './Guards/auth.guard';


const routes: Routes = [
  {
    path:'', redirectTo:'/login', pathMatch:'full'
  },
  {
    path:'home', canActivate:[AuthGuard], component:MainpageComponent
  },
  {
    path:'login', component:LoginpageComponent
  },
  {
    path:'**',  component:ErrorcomponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
