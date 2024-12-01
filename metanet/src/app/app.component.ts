import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{ HomepageComponent } from './usercomponents/homepage/homepage.component';
import {AngularToastifyModule} from "angular-toastify";


@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, HomepageComponent, AngularToastifyModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'metanet';
}
