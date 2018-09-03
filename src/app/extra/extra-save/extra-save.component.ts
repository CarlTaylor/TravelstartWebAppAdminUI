import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AdminService} from '../../service/admin.service';

@Component({
  selector: 'app-extra-save',
  templateUrl: './extra-save.component.html',
  styleUrls: ['./extra-save.component.css']
})
export class ExtraSaveComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private adminService: AdminService) { }

  saveForm: FormGroup;

  ngOnInit() {

    this.saveForm = this.formBuilder.group({
      id: [],
      description: ['', Validators.required],
      price: ['', Validators.required]
    });

  }

  onSubmit() {
    this.adminService.saveExtra(this.saveForm.value)
      .subscribe( data => {
        this.router.navigate(['extra-list']);
      });
  }

}
