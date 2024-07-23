import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprofileModelsComponent } from './userprofile-models.component';

describe('UserprofileModelsComponent', () => {
  let component: UserprofileModelsComponent;
  let fixture: ComponentFixture<UserprofileModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserprofileModelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserprofileModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
