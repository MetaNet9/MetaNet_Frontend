import { Component, OnInit } from '@angular/core';
import { LandingnavbarComponent } from '../landingnavbar/landingnavbar.component';
import { FooterComponent } from '../footer/footer.component';
import { Model1Component } from 'src/app/3Dmodels/model1/model1.component';
import { Model2Component } from 'src/app/3Dmodels/model2/model2.component';





@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [LandingnavbarComponent, FooterComponent, Model1Component,Model2Component],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
