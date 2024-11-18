import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModCreatorsComponent } from './mod-creators.component';

describe('ModCreatorsComponent', () => {
  let component: ModCreatorsComponent;
  let fixture: ComponentFixture<ModCreatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModCreatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModCreatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
