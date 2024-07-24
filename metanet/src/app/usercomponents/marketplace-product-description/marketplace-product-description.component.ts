import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { UserNavbarComponent } from '../user-navbar/user-navbar.component';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { InputNumberModule } from 'primeng/inputnumber';
import { TabViewModule } from 'primeng/tabview';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { DataViewModule } from 'primeng/dataview';
import { CommonModule } from '@angular/common';
import { MeterGroupModule } from 'primeng/metergroup';

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
    MeterGroupModule
  ],
  templateUrl: './marketplace-product-description.component.html',
  styleUrl: './marketplace-product-description.component.css'
})
export class MarketplaceProductDescriptionComponent {
  ratingvalue: number = 5;

  reviweratingvalue: number = 4;

  countity: number = 0;

  value = [
    { value: 15 }
];


  // rating value
  fivestar = [ { value: 65 } ];
  fourstar = [ { value: 15 } ];
  threestar = [ { value: 5 } ];
  twostar = [ { value: 10 } ];
  onestar = [ { value: 5 } ];
}
