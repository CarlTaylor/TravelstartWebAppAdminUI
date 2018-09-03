import {Component, OnInit} from '@angular/core';
import {Extra} from '../../model/Extra';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AdminService} from '../../service/admin.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-extra-edit',
  templateUrl: './extra-edit.component.html',
  styleUrls: ['./extra-edit.component.css']
})
export class ExtraEditComponent implements OnInit {

  extra: Extra;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private adminService: AdminService) { }

  ngOnInit() {
    const extraId = localStorage.getItem('editExtraId');
    if (!extraId) {
      alert('Invalid action.');
      this.router.navigate(['extra-list']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      description: ['', Validators.required],
      price: ['', Validators.required]
    });
    this.adminService.getExtraById(+extraId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.adminService.editExtra(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['extra-list']);
        },
        error => {
          alert(error);
        });
  }

}
