import { Component } from '@angular/core';
import { UserNavbarComponent } from '../user-navbar/user-navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-userprofile-collections',
  standalone: true,
  imports: [UserNavbarComponent,FooterComponent,ButtonModule],
  templateUrl: './userprofile-collections.component.html',
  styleUrl: './userprofile-collections.component.css'
})
export class UserprofileCollectionsComponent {

}
