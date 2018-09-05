import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AdminService} from '../../service/admin.service';
import {first} from 'rxjs/operators';
import {Class} from '../../model/Class';

@Component({
  selector: 'app-class-edit',
  templateUrl: './class-edit.component.html',
  styleUrls: ['./class-edit.component.css']
})
export class ClassEditComponent implements OnInit {

  class: Class;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private adminService: AdminService) { }

  ngOnInit() {
    const className = localStorage.getItem('editClassName');
    const airplaneId = localStorage.getItem('editAirplaneId');
    if (!airplaneId && !className) {
      alert('Invalid action.');
      this.router.navigate(['class-list']);
      return;
    }
    this.editForm = this.formBuilder.group({
      airplaneId: [],
      className: [],
      maxSeats: ['', Validators.required],
      spaceAvailableFlag: ['', Validators.required]
    });
    this.adminService.getClassById(+airplaneId, className)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.adminService.editClass(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['class-list']);
        },
        error => {
          alert(error);
        });
  }

}
