import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './appLayout/navbar/navbar.component';
import { HeaderComponent } from './appLayout/header/header.component';
import { HomeComponent } from './main/home/home.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { SitenavComponent } from './appLayout/sitenav/sitenav.component';
import { ServicesComponent } from './master/services/services.component';
import { ApprovedCustomerDetailsComponent } from './master/approved-customer-details/approved-customer-details.component';
import { RejectedCustomerDetailsComponent } from './master/rejected-customer-details/rejected-customer-details.component';
import { AllCustomerDetailsComponent } from './master/all-customer-details/all-customer-details.component';
import { NewCustomerDetailsComponent } from './master/new-customer-details/new-customer-details.component';
import { AddCustomerDetailsComponent } from './customer-Details/add-customer-details/add-customer-details.component';
import { AgentDetailsComponent } from './master/agent-details/agent-details.component';
import { OldCustomerDetailsComponent } from './customer-Details/old-customer-details/old-customer-details.component';
import { FooterComponent } from './appLayout/footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    SitenavComponent,
    ServicesComponent,
    ApprovedCustomerDetailsComponent,
    RejectedCustomerDetailsComponent,
    AllCustomerDetailsComponent,
    NewCustomerDetailsComponent,
    AddCustomerDetailsComponent,
    AgentDetailsComponent,
    OldCustomerDetailsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
