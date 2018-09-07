import {Component, OnInit} from '@angular/core';
import {Airplane} from '../../model/Airplane';
import {Router} from '@angular/router';
import {AdminService} from '../../service/admin.service';

@Component({
  selector: 'app-airplane-list',
  templateUrl: './airplane-list.component.html',
  styleUrls: ['./airplane-list.component.css']
})
export class AirplaneListComponent implements OnInit {

  airplanes: Airplane[];

  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getAirplanes().subscribe(
      data => { this.airplanes = data;
      });
  }

  deleteAirplane(airplane: Airplane): void {
    this.adminService.deleteAirplane(airplane.id)
      .subscribe( data => {
        this.airplanes = this.airplanes.filter(a => a !== airplane);
      });
  }

  editAirplane(airplane: Airplane): void {
    localStorage.removeItem('editAirplaneId');
    localStorage.setItem('editAirplaneId', airplane.id.toString());
    this.router.navigate(['airplane-edit']);
  }

  saveAirplane(): void {
    this.router.navigate(['airplane-save']);
  }

  viewClasses(airplane: Airplane): void {
    localStorage.removeItem('ClassByAirplaneId');
    localStorage.setItem('ClassByAirplaneId', airplane.id.toString());
    this.router.navigate(['class-list']);
  }
}
