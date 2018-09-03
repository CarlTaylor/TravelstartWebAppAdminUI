import { Routes, RouterModule } from '@angular/router';

import { AirlineEditComponent } from './airline-edit/airline-edit.component';
import { AirlineListComponent } from './airline-list/airline-list.component';
import { AirlineSaveComponent } from './airline-save/airline-save.component';
import {AirplaneEditComponent} from './airplane-edit/airplane-edit.component';
import { AirplaneListComponent } from './airplane-list/airplane-list.component';
import {AirplaneSaveComponent} from './airplane-save/airplane-save.component';
import { AirportListComponent } from './airport-list/airport-list.component';
import { ClassListComponent } from './class-list/class-list.component';
import { ExtraListComponent } from './extra-list/extra-list.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { PricingListComponent } from './pricing-list/pricing-list.component';
import { SeatListComponent } from './seat-list/seat-list.component';
import { TaxesListComponent } from './taxes-list/taxes-list.component';

const routes: Routes = [
  { path: 'airline-edit', component: AirlineEditComponent },
  { path: 'airline-list', component: AirlineListComponent },
  { path: 'airline-save', component: AirlineSaveComponent },
  { path: '', component: AirlineListComponent },
  { path: 'airplane-edit', component: AirplaneEditComponent },
  { path: 'airplane-list', component: AirplaneListComponent },
  { path: 'airplane-save', component: AirplaneSaveComponent },
  { path: 'airport-list', component: AirportListComponent },
  { path: 'class-list', component: ClassListComponent },
  { path: 'extra-list', component: ExtraListComponent },
  { path: 'flight-list', component: FlightListComponent },
  { path: 'pricing-list', component: PricingListComponent },
  { path: 'seat-list', component: SeatListComponent },
  { path: 'taxes-list', component: TaxesListComponent }
];

export const routing = RouterModule.forRoot(routes);
