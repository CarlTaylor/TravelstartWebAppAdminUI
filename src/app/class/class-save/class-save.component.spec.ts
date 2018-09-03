import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClassSaveComponent} from './class-save.component';

describe('ClassSaveComponent', () => {
  let component: ClassSaveComponent;
  let fixture: ComponentFixture<ClassSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
