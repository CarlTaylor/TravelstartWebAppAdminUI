import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../../service/admin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-airline-save',
  templateUrl: './airline-save.component.html',
  styleUrls: ['./airline-save.component.css']
})
export class AirlineSaveComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private adminService: AdminService) { }

  saveForm: FormGroup;

  ngOnInit() {

    this.saveForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required]
    });

  }

  onSubmit() {
    this.adminService.saveAirline(this.saveForm.value)
      .subscribe( data => {
        this.router.navigate(['airline-list']);
      });
  }

}
