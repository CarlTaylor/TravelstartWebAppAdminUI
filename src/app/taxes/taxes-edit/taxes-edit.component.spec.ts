import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TaxesEditComponent} from './taxes-edit.component';

describe('TaxesEditComponent', () => {
  let component: TaxesEditComponent;
  let fixture: ComponentFixture<TaxesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
