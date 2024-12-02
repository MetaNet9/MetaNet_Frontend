import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorPayoutsComponent } from './moderator-payouts.component';


describe('ModeratorPayoutsComponent', () => {
  let component: ModeratorPayoutsComponent;
  let fixture: ComponentFixture<ModeratorPayoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModeratorPayoutsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeratorPayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
