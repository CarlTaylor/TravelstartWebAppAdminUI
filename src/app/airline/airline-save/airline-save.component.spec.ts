import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlineSaveComponent } from './airline-save.component';

describe('AirlineSaveComponent', () => {
  let component: AirlineSaveComponent;
  let fixture: ComponentFixture<AirlineSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirlineSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlineSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
