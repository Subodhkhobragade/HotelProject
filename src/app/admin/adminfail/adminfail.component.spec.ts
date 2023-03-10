import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfailComponent } from './adminfail.component';

describe('AdminfailComponent', () => {
  let component: AdminfailComponent;
  let fixture: ComponentFixture<AdminfailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminfailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminfailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
