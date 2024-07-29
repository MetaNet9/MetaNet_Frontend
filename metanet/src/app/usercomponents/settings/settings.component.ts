import { Component } from '@angular/core';
import { UserNavbarComponent } from "../user-navbar/user-navbar.component";
import { UserProfileHeaderComponent } from "../user-profile-header/user-profile-header.component";
import { FooterComponent } from "../footer/footer.component";
import { TabViewModule } from 'primeng/tabview';
import { FormControl, FormControlStatus, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    UserNavbarComponent,
    UserProfileHeaderComponent,
    FooterComponent,
    TabViewModule,
    ReactiveFormsModule
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  profileDetails = new FormGroup({
    userName: new FormControl('metanet.com/Josaphine5'),
    displayName: new FormControl('Josaphine54'),
    tagline: new FormControl('Describe your tagline within 150 words'),
    accType: new FormControl(''),
    bio: new FormControl('Describe yourself within 150 words'),
    location: new FormControl('Enter your location'),
    personalWebsite: new FormControl(''),
    twitterAcc: new FormControl(''),
    fbAcc: new FormControl(''),
    instaAcc: new FormControl(''),
    linkedInAcc: new FormControl(''),
  })


  newEmailAddress = new FormGroup({
    currentEmail: new FormControl(''),
    newEmail: new FormControl(''),
    password: new FormControl(''),
    
  })

  changePassword = new FormGroup({
    currentPassword: new FormControl(''),
    newPassword: new FormControl(''),
    confirmPassword: new FormControl(''),
    apiToken: new FormControl(''),
    
  })
}
