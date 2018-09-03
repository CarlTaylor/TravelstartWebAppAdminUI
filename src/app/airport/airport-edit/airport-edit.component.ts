import {Component, OnInit} from '@angular/core';
import {Airport} from '../../model/Airport';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AdminService} from '../../service/admin.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-airport-edit',
  templateUrl: './airport-edit.component.html',
  styleUrls: ['./airport-edit.component.css']
})
export class AirportEditComponent implements OnInit {

  airport: Airport;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private adminService: AdminService) { }

  ngOnInit() {
    const airportId = localStorage.getItem('editAirportId');
    if (!airportId) {
      alert('Invalid action.');
      this.router.navigate(['airport-list']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required]
    });
    this.adminService.getAirportById(+airportId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.adminService.editAirport(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['airport-list']);
        },
        error => {
          alert(error);
        });
  }

}
