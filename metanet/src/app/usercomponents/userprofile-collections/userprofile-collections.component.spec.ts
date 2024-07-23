import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprofileCollectionsComponent } from './userprofile-collections.component';

describe('UserprofileCollectionsComponent', () => {
  let component: UserprofileCollectionsComponent;
  let fixture: ComponentFixture<UserprofileCollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserprofileCollectionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserprofileCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
