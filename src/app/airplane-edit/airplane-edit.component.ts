import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { Router } from '@angular/router';
import { Airplane } from '../model/Airplane';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-airplane-edit',
  templateUrl: './airplane-edit.component.html',
  styleUrls: ['./airplane-edit.component.css']
})
export class AirplaneEditComponent implements OnInit {

  airplane: Airplane;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private adminService: AdminService) { }

  ngOnInit() {
    const airplaneId = localStorage.getItem('editAirplaneId');
    if (!airplaneId) {
      alert('Invalid action.');
      this.router.navigate(['airplane-list']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required]
    });
    this.adminService.getAirplaneById(+airplaneId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.adminService.editAirplane(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['airplane-list']);
        },
        error => {
          alert(error);
        });
  }

}
