import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {routing} from './app-routing.module';

import {AppComponent} from './app.component';
import {FlightListComponent} from './flight/flight-list/flight-list.component';
import {AirlineListComponent} from './airline/airline-list/airline-list.component';
import {AirportListComponent} from './airport/airport-list/airport-list.component';
import {AirplaneListComponent} from './airplane/airplane-list/airplane-list.component';
import {ClassListComponent} from './class/class-list/class-list.component';
import {ExtraListComponent} from './extra/extra-list/extra-list.component';
import {PricingListComponent} from './pricing/pricing-list/pricing-list.component';
import {SeatListComponent} from './seat/seat-list/seat-list.component';
import {TaxesListComponent} from './taxes/taxes-list/taxes-list.component';

import {HttpClientModule} from '@angular/common/http';
import {AirlineEditComponent} from './airline/airline-edit/airline-edit.component';
import {AirlineSaveComponent} from './airline/airline-save/airline-save.component';
import {AdminService} from './service/admin.service';
import {AirplaneEditComponent} from './airplane/airplane-edit/airplane-edit.component';
import {AirplaneSaveComponent} from './airplane/airplane-save/airplane-save.component';
import {AirportSaveComponent} from './airport/airport-save/airport-save.component';
import {AirportEditComponent} from './airport/airport-edit/airport-edit.component';
import {ClassEditComponent} from './class/class-edit/class-edit.component';
import {ClassSaveComponent} from './class/class-save/class-save.component';
import {ExtraSaveComponent} from './extra/extra-save/extra-save.component';
import {ExtraEditComponent} from './extra/extra-edit/extra-edit.component';
import {FlightEditComponent} from './flight/flight-edit/flight-edit.component';
import {FlightSaveComponent} from './flight/flight-save/flight-save.component';
import {PricingSaveComponent} from './pricing/pricing-save/pricing-save.component';
import {PricingEditComponent} from './pricing/pricing-edit/pricing-edit.component';
import {SeatEditComponent} from './seat/seat-edit/seat-edit.component';
import {SeatSaveComponent} from './seat/seat-save/seat-save.component';
import {TaxesSaveComponent} from './taxes/taxes-save/taxes-save.component';
import {TaxesEditComponent} from './taxes/taxes-edit/taxes-edit.component';

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
    AirplaneSaveComponent,
    AirportSaveComponent,
    AirportEditComponent,
    ClassEditComponent,
    ClassSaveComponent,
    ExtraSaveComponent,
    ExtraEditComponent,
    FlightEditComponent,
    FlightSaveComponent,
    PricingSaveComponent,
    PricingEditComponent,
    SeatEditComponent,
    SeatSaveComponent,
    TaxesSaveComponent,
    TaxesEditComponent
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
