import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TaxesSaveComponent} from './taxes-save.component';

describe('TaxesSaveComponent', () => {
  let component: TaxesSaveComponent;
  let fixture: ComponentFixture<TaxesSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxesSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxesSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
