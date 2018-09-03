import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PricingSaveComponent} from './pricing-save.component';

describe('PricingSaveComponent', () => {
  let component: PricingSaveComponent;
  let fixture: ComponentFixture<PricingSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
