import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysModaratorComponent } from './sys-modarator.component';

describe('SysModaratorComponent', () => {
  let component: SysModaratorComponent;
  let fixture: ComponentFixture<SysModaratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SysModaratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysModaratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
