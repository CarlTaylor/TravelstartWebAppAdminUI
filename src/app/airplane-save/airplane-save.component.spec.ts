import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirplaneSaveComponent } from './airplane-save.component';

describe('AirplaneSaveComponent', () => {
  let component: AirplaneSaveComponent;
  let fixture: ComponentFixture<AirplaneSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirplaneSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirplaneSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
