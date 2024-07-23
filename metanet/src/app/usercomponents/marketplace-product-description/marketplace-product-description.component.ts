import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { UserNavbarComponent } from '../user-navbar/user-navbar.component';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-marketplace-product-description',
  standalone: true,
  imports: [UserNavbarComponent, FooterComponent,FormsModule, RatingModule, InputNumberModule],
  templateUrl: './marketplace-product-description.component.html',
  styleUrl: './marketplace-product-description.component.css'
})
export class MarketplaceProductDescriptionComponent {
  ratingvalue: number = 5;

  countity: number = 0;
}
