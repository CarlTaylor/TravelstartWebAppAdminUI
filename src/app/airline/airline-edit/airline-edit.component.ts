import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../service/admin.service';
import {Router} from '@angular/router';
import {Airline} from '../../model/Airline';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-airline-edit',
  templateUrl: './airline-edit.component.html',
  styleUrls: ['./airline-edit.component.css']
})
export class AirlineEditComponent implements OnInit {

  airline: Airline;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private adminService: AdminService) { }

  ngOnInit() {
    const airlineId = localStorage.getItem('editAirlineId');
    if (!airlineId) {
      alert('Invalid action.');
      this.router.navigate(['airline-list']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required]
    });
    this.adminService.getAirlineById(+airlineId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.adminService.editAirline(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['airline-list']);
        },
        error => {
          alert(error);
        });
  }

}
