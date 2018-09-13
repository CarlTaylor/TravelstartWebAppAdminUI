import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AdminService} from '../../service/admin.service';
import {Seat} from '../../model/Seat';

@Component({
  selector: 'app-seat-save',
  templateUrl: './seat-save.component.html',
  styleUrls: ['./seat-save.component.css']
})
export class SeatSaveComponent implements OnInit {

  seats: Seat[];
  saveForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private adminService: AdminService) { }

  ngOnInit() {
    const airplaneId = localStorage.getItem('SeatByAirplaneId');
    const className = localStorage.getItem('SeatByClassName');

    this.saveForm = this.formBuilder.group({
      seatId: this.formBuilder.group({
        airplaneId: [{value: airplaneId}],
        className: [{value: className}],
        num: []
      }),
      seatAvailableFlag: ['true', Validators.required]
    });
  }

  onSubmit() {
    this.adminService.saveSeat(this.saveForm.value)
      .subscribe( data => {
        this.router.navigate(['seat-list']);
      });
  }

}
