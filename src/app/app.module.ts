import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { routing } from './app-routing.module';

import { AppComponent } from './app.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { AirlineListComponent } from './airline-list/airline-list.component';
import { AirportListComponent } from './airport-list/airport-list.component';
import { AirplaneListComponent } from './airplane-list/airplane-list.component';
import { ClassListComponent } from './class-list/class-list.component';
import { ExtraListComponent } from './extra-list/extra-list.component';
import { PricingListComponent } from './pricing-list/pricing-list.component';
import { SeatListComponent } from './seat-list/seat-list.component';
import { TaxesListComponent } from './taxes-list/taxes-list.component';

import { HttpClientModule } from '@angular/common/http';
import { AirlineEditComponent } from './airline-edit/airline-edit.component';
import { AirlineSaveComponent } from './airline-save/airline-save.component';
import { AdminService } from './service/admin.service';
import { AirplaneEditComponent } from './airplane-edit/airplane-edit.component';
import { AirplaneSaveComponent } from './airplane-save/airplane-save.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightListComponent,
    AirlineListComponent,
    AirportListComponent,
    AirplaneListComponent,
    ClassListComponent,
    ExtraListComponent,
    PricingListComponent,
    SeatListComponent,
    TaxesListComponent,
    AirlineEditComponent,
    AirlineSaveComponent,
    AirplaneEditComponent,
    AirplaneSaveComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
