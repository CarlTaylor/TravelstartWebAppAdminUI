import {RouterModule, Routes} from '@angular/router';

import {AirlineEditComponent} from './airline/airline-edit/airline-edit.component';
import {AirlineListComponent} from './airline/airline-list/airline-list.component';
import {AirlineSaveComponent} from './airline/airline-save/airline-save.component';
import {AirplaneEditComponent} from './airplane/airplane-edit/airplane-edit.component';
import {AirplaneListComponent} from './airplane/airplane-list/airplane-list.component';
import {AirplaneSaveComponent} from './airplane/airplane-save/airplane-save.component';
import {AirportListComponent} from './airport/airport-list/airport-list.component';
import {ClassListComponent} from './class/class-list/class-list.component';
import {ExtraListComponent} from './extra/extra-list/extra-list.component';
import {FlightListComponent} from './flight/flight-list/flight-list.component';
import {PricingListComponent} from './pricing/pricing-list/pricing-list.component';
import {SeatListComponent} from './seat/seat-list/seat-list.component';
import {TaxesListComponent} from './taxes/taxes-list/taxes-list.component';
import {AirportEditComponent} from './airport/airport-edit/airport-edit.component';
import {AirportSaveComponent} from './airport/airport-save/airport-save.component';
import {ExtraEditComponent} from './extra/extra-edit/extra-edit.component';
import {ExtraSaveComponent} from './extra/extra-save/extra-save.component';
import {TaxesEditComponent} from './taxes/taxes-edit/taxes-edit.component';
import {TaxesSaveComponent} from './taxes/taxes-save/taxes-save.component';
import {ClassEditComponent} from './class/class-edit/class-edit.component';
import {ClassSaveComponent} from './class/class-save/class-save.component';

const routes: Routes = [
  { path: 'airline-edit', component: AirlineEditComponent },
  { path: 'airline-list', component: AirlineListComponent },
  { path: 'airline-save', component: AirlineSaveComponent },
  { path: 'airplane-edit', component: AirplaneEditComponent },
  { path: 'airplane-list', component: AirplaneListComponent },
  { path: 'airplane-save', component: AirplaneSaveComponent },
  { path: 'airport-edit', component: AirportEditComponent },
  { path: 'airport-list', component: AirportListComponent },
  { path: 'airport-save', component: AirportSaveComponent },
  { path: 'class-edit', component: ClassEditComponent },
  { path: 'class-list', component: ClassListComponent },
  { path: 'class-save', component: ClassSaveComponent },
  { path: 'extra-edit', component: ExtraEditComponent},
  { path: 'extra-list', component: ExtraListComponent },
  { path: 'extra-save', component: ExtraSaveComponent },
  { path: 'flight-list', component: FlightListComponent },
  { path: 'pricing-list', component: PricingListComponent },
  { path: 'seat-list', component: SeatListComponent },
  { path: 'taxes-edit', component: TaxesEditComponent },
  { path: 'taxes-list', component: TaxesListComponent },
  { path: 'taxes-save', component: TaxesSaveComponent }
];

export const routing = RouterModule.forRoot(routes);
