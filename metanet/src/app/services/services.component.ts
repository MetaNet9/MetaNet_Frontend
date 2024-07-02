import { Component } from '@angular/core';
import { Model1Component } from '../model1/model1.component';
import { FooterComponent } from '../footer/footer.component';
import { LandingnavbarComponent } from '../landingnavbar/landingnavbar.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [LandingnavbarComponent, FooterComponent,Model1Component],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
