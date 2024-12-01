import { Component } from '@angular/core';
import { LandingnavbarComponent } from '../landingnavbar/landingnavbar.component';
import { UserProfileHeaderComponent } from "../user-profile-header/user-profile-header.component";
import { UserNavbarComponent } from "../user-navbar/user-navbar.component";
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-become-creator',
  standalone: true,
  imports: [LandingnavbarComponent, FooterComponent, UserProfileHeaderComponent, UserNavbarComponent],
  templateUrl: './become-creator.component.html',
  styleUrl: './become-creator.component.css'
})
export class BecomeCreatorComponent {

}
