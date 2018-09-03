import {Component, OnInit} from '@angular/core';
import {Taxes} from '../../model/Taxes';
import {Router} from '@angular/router';
import {AdminService} from '../../service/admin.service';

@Component({
  selector: 'app-taxes-list',
  templateUrl: './taxes-list.component.html',
  styleUrls: ['./taxes-list.component.css']
})
export class TaxesListComponent implements OnInit {

  taxes: Taxes[];

  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getTaxes().subscribe(
      data => { this.taxes = data;
      });
  }

  deleteTaxes(taxes: Taxes): void {
    this.adminService.deleteTaxes(taxes.id)
      .subscribe( data => {
        this.taxes = this.taxes.filter(a => a !== taxes);
      });
  }

  editTaxes(taxes: Taxes): void {
    localStorage.removeItem('editTaxesId');
    localStorage.setItem('editTaxesId', taxes.id.toString());
    this.router.navigate(['taxes-edit']);
  }

  saveTaxes(): void {
    this.router.navigate(['taxes-save']);
  }
}
