import { Component } from '@angular/core';
import { UserNavbarComponent } from '../user-navbar/user-navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-marketplace-shoppingcart',
  standalone: true,
  imports: [UserNavbarComponent, FooterComponent,FormsModule, InputNumberModule],
  templateUrl: './marketplace-shoppingcart.component.html',
  styleUrl: './marketplace-shoppingcart.component.css'
})
export class MarketplaceShoppingcartComponent {
  value1: number = 50;
}
