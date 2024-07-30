import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysSysAdminComponent } from './sys-sys-admin.component';

describe('SysSysAdminComponent', () => {
  let component: SysSysAdminComponent;
  let fixture: ComponentFixture<SysSysAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SysSysAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysSysAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
