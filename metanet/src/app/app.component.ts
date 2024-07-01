import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{ HomepageComponent } from './homepage/homepage.component';
import { AboutusComponent } from './aboutus/aboutus.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutusComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'metanet';
}
