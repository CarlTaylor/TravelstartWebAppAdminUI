import {Component, OnInit} from '@angular/core';
import {Seat} from '../../model/Seat';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AdminService} from '../../service/admin.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-seat-edit',
  templateUrl: './seat-edit.component.html',
  styleUrls: ['./seat-edit.component.css']
})
export class SeatEditComponent implements OnInit {

  seat: Seat;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private adminService: AdminService) { }

  ngOnInit() {
    const airplaneId = localStorage.getItem('editSeatAirplaneId');
    const className = localStorage.getItem('editSeatClassName');
    const num = localStorage.getItem('editSeatNum');
    if (!airplaneId && !className && !num) {
      alert('Invalid action.');
      this.router.navigate(['seat-list']);
      return;
    }
    this.editForm = this.formBuilder.group({
      seatId: this.formBuilder.group({
        airplaneId: [airplaneId],
        className: [className],
        num: [num]
      }),
      seatAvailableFlag: ['true']
    });
    this.adminService.getSeatBySeatId(+airplaneId, className, +num)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.adminService.editSeat(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['seat-list']);
        },
        error => {
          alert(error);
        });
  }

}
