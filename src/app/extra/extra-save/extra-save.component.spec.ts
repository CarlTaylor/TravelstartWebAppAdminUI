import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ExtraSaveComponent} from './extra-save.component';

describe('ExtraSaveComponent', () => {
  let component: ExtraSaveComponent;
  let fixture: ComponentFixture<ExtraSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
