import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModUsersComponent } from './mod-users.component';

describe('ModUsersComponent', () => {
  let component: ModUsersComponent;
  let fixture: ComponentFixture<ModUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
