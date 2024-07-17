import { Component } from '@angular/core';
import { LandingnavbarComponent } from '../landingnavbar/landingnavbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-marketplace-checkout',
  standalone: true,
  imports: [LandingnavbarComponent, FooterComponent],
  templateUrl: './marketplace-checkout.component.html',
  styleUrl: './marketplace-checkout.component.css'
})
export class MarketplaceCheckoutComponent {

}
