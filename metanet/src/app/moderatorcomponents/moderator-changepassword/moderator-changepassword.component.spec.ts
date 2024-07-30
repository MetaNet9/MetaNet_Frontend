import { ComponentFixture, TestBed } from '@angular/core/testing';


import { ModeratorChangepasswordComponent } from './moderator-changepassword.component';

describe('ModeratorChangepasswordComponent', () => {
  let component: ModeratorChangepasswordComponent;
  let fixture: ComponentFixture<ModeratorChangepasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModeratorChangepasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeratorChangepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
