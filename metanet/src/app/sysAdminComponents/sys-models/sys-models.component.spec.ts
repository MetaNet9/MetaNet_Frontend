import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysModelsComponent } from './sys-models.component';

describe('SysModelsComponent', () => {
  let component: SysModelsComponent;
  let fixture: ComponentFixture<SysModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SysModelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
