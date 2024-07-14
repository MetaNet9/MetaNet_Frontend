import { Component } from '@angular/core';
import { LandingnavbarComponent } from '../landingnavbar/landingnavbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-ordersuccessful',
  standalone: true,
  imports: [LandingnavbarComponent, FooterComponent],
  templateUrl: './ordersuccessful.component.html',
  styleUrl: './ordersuccessful.component.css'
})
export class OrdersuccessfulComponent {

}
