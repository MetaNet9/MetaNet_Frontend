import { Component } from '@angular/core';
import { LandingnavbarComponent } from '../landingnavbar/landingnavbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [LandingnavbarComponent, FooterComponent],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {

}
