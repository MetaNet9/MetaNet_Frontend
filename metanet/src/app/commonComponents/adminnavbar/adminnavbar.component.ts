import { Component } from '@angular/core';
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'app-adminnavbar',
  standalone: true,
  imports: [BadgeModule],
  templateUrl: './adminnavbar.component.html',
  styleUrl: './adminnavbar.component.css'
})
export class AdminnavbarComponent {

}
