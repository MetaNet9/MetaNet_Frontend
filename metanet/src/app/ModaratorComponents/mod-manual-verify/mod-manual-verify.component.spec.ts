import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModManualVerifyComponent } from './mod-manual-verify.component';

describe('ModManualVerifyComponent', () => {
  let component: ModManualVerifyComponent;
  let fixture: ComponentFixture<ModManualVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModManualVerifyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModManualVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
