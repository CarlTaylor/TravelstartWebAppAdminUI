import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AdminService} from '../../service/admin.service';

@Component({
  selector: 'app-taxes-save',
  templateUrl: './taxes-save.component.html',
  styleUrls: ['./taxes-save.component.css']
})
export class TaxesSaveComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private adminService: AdminService) { }

  saveForm: FormGroup;

  ngOnInit() {

    this.saveForm = this.formBuilder.group({
      id: [],
      amount: ['', Validators.required]
    });

  }

  onSubmit() {
    this.adminService.saveTaxes(this.saveForm.value)
      .subscribe( data => {
        this.router.navigate(['taxes-list']);
      });
  }

}
