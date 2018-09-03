import {Component, OnInit} from '@angular/core';
import {Airport} from '../../model/Airport';
import {Router} from '@angular/router';
import {AdminService} from '../../service/admin.service';

@Component({
  selector: 'app-airport-list',
  templateUrl: './airport-list.component.html',
  styleUrls: ['./airport-list.component.css']
})
export class AirportListComponent implements OnInit {

  airports: Airport[];

  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getAirports().subscribe(
      data => { this.airports = data;
      });
  }

  deleteAirport(airport: Airport): void {
    this.adminService.deleteAirport(airport.id)
      .subscribe( data => {
        this.airports = this.airports.filter(a => a !== airport);
      });
  }

  editAirport(airport: Airport): void {
    localStorage.removeItem('editAirportId');
    localStorage.setItem('editAirportId', airport.id.toString());
    this.router.navigate(['airport-edit']);
  }

  saveAirport(): void {
    this.router.navigate(['airport-save']);
  }
}
