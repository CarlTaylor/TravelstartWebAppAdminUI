import {Component, OnInit} from '@angular/core';
import {Extra} from '../../model/Extra';
import {Router} from '@angular/router';
import {AdminService} from '../../service/admin.service';

@Component({
  selector: 'app-extra-list',
  templateUrl: './extra-list.component.html',
  styleUrls: ['./extra-list.component.css']
})
export class ExtraListComponent implements OnInit {

  extras: Extra[];

  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getExtras().subscribe(
      data => { this.extras = data;
      });
  }

  deleteExtra(extra: Extra): void {
    this.adminService.deleteExtra(extra.id)
      .subscribe( data => {
        this.extras = this.extras.filter(a => a !== extra);
      });
  }

  editExtra(extra: Extra): void {
    localStorage.removeItem('editExtraId');
    localStorage.setItem('editExtraId', extra.id.toString());
    this.router.navigate(['extra-edit']);
  }

  saveExtra(): void {
    this.router.navigate(['extra-save']);
  }
}
