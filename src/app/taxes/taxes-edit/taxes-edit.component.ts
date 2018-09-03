import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AdminService} from '../../service/admin.service';
import {first} from 'rxjs/operators';
import {Taxes} from '../../model/Taxes';

@Component({
  selector: 'app-taxes-edit',
  templateUrl: './taxes-edit.component.html',
  styleUrls: ['./taxes-edit.component.css']
})
export class TaxesEditComponent implements OnInit {

  taxes: Taxes;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private adminService: AdminService) { }

  ngOnInit() {
    const taxesId = localStorage.getItem('editTaxesId');
    if (!taxesId) {
      alert('Invalid action.');
      this.router.navigate(['taxes-list']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      amount: ['', Validators.required]
    });
    this.adminService.getTaxesById(+taxesId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.adminService.editTaxes(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['taxes-list']);
        },
        error => {
          alert(error);
        });
  }

}
