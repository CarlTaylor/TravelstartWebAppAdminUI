import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AdminService} from '../../service/admin.service';

@Component({
  selector: 'app-airport-save',
  templateUrl: './airport-save.component.html',
  styleUrls: ['./airport-save.component.css']
})
export class AirportSaveComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private adminService: AdminService) { }

  saveForm: FormGroup;

  ngOnInit() {

    this.saveForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required]
    });

  }

  onSubmit() {
    this.adminService.saveAirport(this.saveForm.value)
      .subscribe( data => {
        this.router.navigate(['airport-list']);
      });
  }

}
