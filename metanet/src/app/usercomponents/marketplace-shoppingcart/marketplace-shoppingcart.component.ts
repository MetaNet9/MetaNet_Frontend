import { Component } from '@angular/core';
import { UserNavbarComponent } from '../user-navbar/user-navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-marketplace-shoppingcart',
  standalone: true,
  imports: [UserNavbarComponent, FooterComponent],
  templateUrl: './marketplace-shoppingcart.component.html',
  styleUrl: './marketplace-shoppingcart.component.css'
})
export class MarketplaceShoppingcartComponent {

}
