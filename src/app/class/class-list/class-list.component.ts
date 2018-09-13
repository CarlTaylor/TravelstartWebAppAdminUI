import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AdminService} from '../../service/admin.service';
import {Class} from '../../model/Class';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {

  classes: Class[];

  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit() {
    const airplaneId = localStorage.getItem('ClassByAirplaneId');
      this.adminService.getClassByIdAirplaneId(+airplaneId).subscribe(
      data => {
        this.classes = data;
      });
  }

  deleteClass(_class: Class): void {
    this.adminService.deleteClass(_class.classId.airplaneId, _class.classId.className)
      .subscribe( data => {
        this.classes = this.classes.filter(a => a !== _class);
      });
  }

  editClass(_class: Class): void {
    localStorage.removeItem('editAirplaneId');
    localStorage.removeItem('editClassName');
    localStorage.setItem('editAirplaneId', _class.classId.airplaneId.toString());
    localStorage.setItem('editClassName', _class.classId.className);
    this.router.navigate(['class-edit']);
  }

  saveClass(): void {
    this.router.navigate(['class-save']);
  }

  viewSeats(_class: Class): void {
    localStorage.removeItem('SeatByAirplaneId');
    localStorage.removeItem('SeatByClassName');
    localStorage.setItem('SeatByAirplaneId', _class.classId.airplaneId.toString());
    localStorage.setItem('SeatByClassName', _class.classId.className);
    this.router.navigate(['seat-list']);
  }
}
