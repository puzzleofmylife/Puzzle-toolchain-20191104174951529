import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PsyregisterComponent } from './components/psyregister/psyregister.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertService } from './services/alert.service';
import { AlertComponent } from './components/alert/alert.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { VerifyComponent } from './components/verify/verify.component';
import { PsychtermsComponent } from './components/psychterms/psychterms.component';
import { ActionMenuOriginDirective } from './directives/action-menu-origin.directive';
import { ActionMenuDropdownDirective } from './directives/action-menu-dropdown.directive';
import { ActionMenuComponent } from './components/action-menu/action-menu.component';
import { PatientRegisterComponent } from './components/useregister/patientregister.component';
import { ApplyComponent } from './components/apply/apply.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { TokenInterceptor } from './auth/token.interceptor';
import { CheckoutResultComponent } from './components/checkout-result/checkout-result.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PsyregisterComponent,
    AlertComponent,
    VerifyComponent,
    PsychtermsComponent,
    ActionMenuOriginDirective,
    ActionMenuDropdownDirective,
    ActionMenuComponent,
    PatientRegisterComponent,
    ApplyComponent,
    TooltipComponent,
    CheckoutResultComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AlertService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
