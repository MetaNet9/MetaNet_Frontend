import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { LandingnavbarComponent } from '../landingnavbar/landingnavbar.component';
import { Model1Component } from 'src/app/3Dmodels/model1/model1.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [LandingnavbarComponent, FooterComponent,Model1Component],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
