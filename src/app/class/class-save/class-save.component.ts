import {Component, OnInit} from '@angular/core';
import {Airplane} from '../../model/Airplane';
import {Router} from '@angular/router';
import {AdminService} from '../../service/admin.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-class-save',
  templateUrl: './class-save.component.html',
  styleUrls: ['./class-save.component.css']
})
export class ClassSaveComponent implements OnInit {

  airplanes: Airplane[];

  constructor(private formBuilder: FormBuilder, private router: Router, private adminService: AdminService) { }

  saveForm: FormGroup;

  ngOnInit() {
    this.adminService.getAirplanes().subscribe(
      data => { this.airplanes = data;
      });

    this.saveForm = this.formBuilder.group({
      classId: this.formBuilder.group({
        airplaneId: [],
        className: []
      }),
      maxSeats: ['', Validators.required],
      spaceAvailableFlag: ['', Validators.required]
    });

  }

  onSubmit() {
    this.adminService.saveClass(this.saveForm.value)
      .subscribe( data => {
        this.router.navigate(['class-list']);
      });
  }

}
