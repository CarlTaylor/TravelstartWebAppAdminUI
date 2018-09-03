import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AirportSaveComponent} from './airport-save.component';

describe('AirportSaveComponent', () => {
  let component: AirportSaveComponent;
  let fixture: ComponentFixture<AirportSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirportSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
