import { Component } from '@angular/core';
import { LandingnavbarComponent } from '../landingnavbar/landingnavbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-marketplace-shoppingcart',
  standalone: true,
  imports: [LandingnavbarComponent, FooterComponent],
  templateUrl: './marketplace-shoppingcart.component.html',
  styleUrl: './marketplace-shoppingcart.component.css'
})
export class MarketplaceShoppingcartComponent {

}
