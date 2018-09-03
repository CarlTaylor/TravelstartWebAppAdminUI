import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FlightSaveComponent} from './flight-save.component';

describe('FlightSaveComponent', () => {
  let component: FlightSaveComponent;
  let fixture: ComponentFixture<FlightSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
