import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AdminService} from '../service/admin.service';

@Component({
  selector: 'app-airplane-save',
  templateUrl: './airplane-save.component.html',
  styleUrls: ['./airplane-save.component.css']
})
export class AirplaneSaveComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private adminService: AdminService) { }

  saveForm: FormGroup;

  ngOnInit() {

    this.saveForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required]
    });

  }

  onSubmit() {
    this.adminService.saveAirplane(this.saveForm.value)
      .subscribe( data => {
        this.router.navigate(['airplane-list']);
      });
  }

}
