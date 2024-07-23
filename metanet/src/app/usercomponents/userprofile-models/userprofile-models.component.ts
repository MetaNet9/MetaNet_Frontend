import { Component } from '@angular/core';
import { UserNavbarComponent } from '../user-navbar/user-navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-userprofile-models',
  standalone: true,
  imports: [UserNavbarComponent,FooterComponent,ButtonModule],
  templateUrl: './userprofile-models.component.html',
  styleUrl: './userprofile-models.component.css'
})
export class UserprofileModelsComponent {

}

