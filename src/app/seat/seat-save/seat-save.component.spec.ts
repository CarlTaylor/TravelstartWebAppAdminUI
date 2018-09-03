import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SeatSaveComponent} from './seat-save.component';

describe('SeatSaveComponent', () => {
  let component: SeatSaveComponent;
  let fixture: ComponentFixture<SeatSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
