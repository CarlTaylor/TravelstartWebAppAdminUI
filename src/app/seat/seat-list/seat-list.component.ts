import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AdminService} from '../../service/admin.service';
import {Seat} from '../../model/Seat';

@Component({
  selector: 'app-seat-list',
  templateUrl: './seat-list.component.html',
  styleUrls: ['./seat-list.component.css']
})
export class SeatListComponent implements OnInit {

  seats: Seat[];

  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit() {
    const airplaneId = localStorage.getItem('SeatByAirplaneId');
    const className = localStorage.getItem('SeatByClassName');
    this.adminService.getAllSeatsByAirplaneIdAndClassName(+airplaneId, className).subscribe(
      data => {
        this.seats = data;
      });
  }


  deleteSeat(seat: Seat): void {
    this.adminService.deleteSeat(seat.seatId)
      .subscribe( data => {
        this.seats = this.seats.filter(a => a !== seat);
      });
  }

  editSeat(seat: Seat): void {
    localStorage.removeItem('editSeatAirplaneId');
    localStorage.removeItem('editSeatClassName');
    localStorage.removeItem('editSeatNum');
    localStorage.setItem('editSeatAirplaneId', seat.seatId.airplaneId.toString());
    localStorage.setItem('editSeatClassName', seat.seatId.className);
    localStorage.setItem('editSeatNum', seat.seatId.num.toString());
    this.router.navigate(['seat-edit']);
  }

  saveSeat(): void {
    this.router.navigate(['seat-save']);
  }
}
