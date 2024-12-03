import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-user-profile-header',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './user-profile-header.component.html',
  styleUrl: './user-profile-header.component.css'
})
export class UserProfileHeaderComponent {

  @Input()
  user: boolean =true;

}
