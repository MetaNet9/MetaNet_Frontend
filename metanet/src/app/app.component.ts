import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{LandingnavbarComponent} from './landingnavbar/landingnavbar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingnavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'metanet';
}
