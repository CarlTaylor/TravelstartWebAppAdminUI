import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AdminService} from '../../service/admin.service';

@Component({
  selector: 'app-class-save',
  templateUrl: './class-save.component.html',
  styleUrls: ['./class-save.component.css']
})
export class ClassSaveComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private adminService: AdminService) { }

  saveForm: FormGroup;

  ngOnInit() {
    const airplaneId = localStorage.getItem('ClassByAirplaneId');

    this.saveForm = this.formBuilder.group({
      classId: this.formBuilder.group({
        airplaneId: [airplaneId],
        className: []
      }),
      maxSeats: [0],
      spaceAvailableFlag: ['true']
    });
  }

  onSubmit() {
    this.adminService.saveClass(this.saveForm.value)
      .subscribe(data => {
        this.router.navigate(['class-list']);
      });
  }

}
