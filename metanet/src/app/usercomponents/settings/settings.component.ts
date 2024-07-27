import { Component } from '@angular/core';
import { UserNavbarComponent } from "../user-navbar/user-navbar.component";
import { UserProfileHeaderComponent } from "../user-profile-header/user-profile-header.component";
import { FooterComponent } from "../footer/footer.component";
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    UserNavbarComponent,
    UserProfileHeaderComponent,
    FooterComponent,
    TabViewModule
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

}
