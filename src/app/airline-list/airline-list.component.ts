import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { Airline } from '../model/Airline';
import {Router} from '@angular/router';

@Component({
  selector: 'app-airline-list',
  templateUrl: './airline-list.component.html',
  styleUrls: ['./airline-list.component.css']
})
export class AirlineListComponent implements OnInit {

  airlines: Airline[];

  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getAirlines().subscribe(
      data => { this.airlines = data;
      });
  }

  deleteAirline(airline: Airline): void {
    this.adminService.deleteAirline(airline.id)
      .subscribe( data => {
        this.airlines = this.airlines.filter(a => a !== airline);
      });
  }

  editAirline(airline: Airline): void {
    localStorage.removeItem('editAirlineId');
    localStorage.setItem('editAirlineId', airline.id.toString());
    this.router.navigate(['airline-edit']);
  }

  saveAirline(): void {
    this.router.navigate(['airline-save']);
  }
}
