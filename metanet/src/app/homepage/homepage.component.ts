import { Component, OnInit } from '@angular/core';
import { LandingnavbarComponent } from '../landingnavbar/landingnavbar.component';
import { FooterComponent } from '../footer/footer.component';
import { Model1Component } from '../model1/model1.component';



@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [LandingnavbarComponent, FooterComponent, Model1Component],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
