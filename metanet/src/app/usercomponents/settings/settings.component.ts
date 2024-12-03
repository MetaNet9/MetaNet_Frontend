import { Component } from '@angular/core';
import { UserNavbarComponent } from "../user-navbar/user-navbar.component";
import { UserProfileHeaderComponent } from "../user-profile-header/user-profile-header.component";
import { FooterComponent } from "../footer/footer.component";
import { TabViewModule } from 'primeng/tabview';
import { FormControl, FormControlStatus, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) {}

  newEmailAddress = new FormGroup({
    currentEmail: new FormControl(''),
    newEmail: new FormControl(''),
    password: new FormControl(''),
    
  })

  changePassword = new FormGroup({
    currentPassword: new FormControl(''),
    newPassword: new FormControl(''),
    confirmPassword: new FormControl(''),
    
    
  });

  resetPassword() {
    // Ensure the new password and confirm password match
    if (this.changePassword.value.newPassword !== this.changePassword.value.confirmPassword) {
      alert('New Password and Confirm Password do not match!');
      return;
    }
  
    // Create the payload
    const payload = {
      oldPassword: this.changePassword.value.currentPassword,
      newPassword: this.changePassword.value.newPassword,
    };
  
    // Make the HTTP POST request
    this.http.post('http://localhost:3000/auth/change-password', payload, {withCredentials: true}).subscribe({
      next: (response) => {
        console.log('Password reset successful:', response);
        alert('Password has been reset successfully!');
        this.changePassword.reset(); // Clear the form after success
      },
      error: (error) => {
        console.error('Password reset failed:', error);
        alert(`Error resetting password: ${error.error?.message || 'Unexpected error occurred'}`);
      },
    });
  }  

}