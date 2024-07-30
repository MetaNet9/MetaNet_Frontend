import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSysAdminComponent } from './admin-sys-admin.component';

describe('AdminSysAdminComponent', () => {
  let component: AdminSysAdminComponent;
  let fixture: ComponentFixture<AdminSysAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminSysAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSysAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
