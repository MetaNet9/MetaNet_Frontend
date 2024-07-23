import { Component } from '@angular/core';
import { UserNavbarComponent } from "../user-navbar/user-navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { UserProfileHeaderComponent } from "../user-profile-header/user-profile-header.component";

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [UserNavbarComponent, FooterComponent, TabViewModule, ButtonModule, UserProfileHeaderComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

}
