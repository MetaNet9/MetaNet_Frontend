import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentToModeratorComponent } from './sent-to-moderator.component';

describe('SentToModeratorComponent', () => {
  let component: SentToModeratorComponent;
  let fixture: ComponentFixture<SentToModeratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SentToModeratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SentToModeratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
