import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerService } from './service/customerservice.service';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// import { AuthService } from './service/auth.service';
import { AuthGuard } from './Guards/auth.guard';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { DividerModule } from 'primeng/divider';

import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FormsModule } from '@angular/forms';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { ErrorcomponentComponent } from './components/errorcomponent/errorcomponent.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { PopuptableComponent } from './components/popuptable/popuptable.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    LoginpageComponent,
    ErrorcomponentComponent,
    PopuptableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    TableModule,
    CheckboxModule,
    ChipModule,
    DialogModule,
    ToastModule,
    ProgressSpinnerModule,
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    DividerModule,
    NgbModule,
    FontAwesomeModule,
    

  ],
  exports: [RouterModule],
  providers: [CustomerService, MessageService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
