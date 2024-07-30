import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysCreatorComponent } from './sys-creator.component';

describe('SysCreatorComponent', () => {
  let component: SysCreatorComponent;
  let fixture: ComponentFixture<SysCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SysCreatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
