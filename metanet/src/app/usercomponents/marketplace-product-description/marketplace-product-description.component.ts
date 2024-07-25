import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { UserNavbarComponent } from '../user-navbar/user-navbar.component';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { TabViewModule } from 'primeng/tabview';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { DataViewModule } from 'primeng/dataview';
import { CommonModule } from '@angular/common';
import { MeterGroupModule } from 'primeng/metergroup';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-marketplace-product-description',
  standalone: true,
  imports: [
    UserNavbarComponent,
    FooterComponent,
    FormsModule,
    RatingModule,
    InputNumberModule,
    TabViewModule,
    AvatarModule,
    AvatarGroupModule,
    DataViewModule,
    CommonModule,
    MeterGroupModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    FloatLabelModule,
    InputTextareaModule,
  ],
  templateUrl: './marketplace-product-description.component.html',
  styleUrl: './marketplace-product-description.component.css',
})
export class MarketplaceProductDescriptionComponent {
  visibleReviewForm: boolean = false;

  formGroup!: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup({
      heading: new FormControl<string | null>(null),
      review: new FormControl<string | null>(null),
      rating: new FormControl<number | null>(null),
    });
  }

  showReviewForm() {
    this.visibleReviewForm = true;
  }

  closeReviewForm() {
    this.visibleReviewForm = false;
  }

  ratingvalue: number = 5;

  reviweratingvalue: number = 4;

  countity: number = 0;

  value = [{ value: 15 }];

  // rating value
  fivestar = [{ value: 65 }];
  fourstar = [{ value: 15 }];
  threestar = [{ value: 5 }];
  twostar = [{ value: 10 }];
  onestar = [{ value: 5 }];
}
