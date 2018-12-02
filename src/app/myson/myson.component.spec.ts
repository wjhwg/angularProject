import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MysonComponent } from './myson.component';

describe('MysonComponent', () => {
  let component: MysonComponent;
  let fixture: ComponentFixture<MysonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MysonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MysonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
