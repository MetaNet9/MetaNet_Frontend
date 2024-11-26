import { Component } from '@angular/core';
import { UserProfileHeaderComponent } from "../user-profile-header/user-profile-header.component";
import { UserNavbarComponent } from "../user-navbar/user-navbar.component";
import { FooterComponent } from '../footer/footer.component';

interface Model {
  image: string;
  name: string;
  price: string;
  discount: number;
  category: string;
  format: string;
  polyCount: string;
  license: string;
  rating: number;
  pbr: boolean;
  animated: boolean;
  rigged: boolean;
}

@Component({
  selector: 'app-upload-success',
  standalone: true,
  imports: [UserProfileHeaderComponent, UserNavbarComponent, FooterComponent],
  templateUrl: './upload-success.component.html',
  styleUrls: ['./upload-success.component.css']
})
export class UploadSuccessComponent {
  models: Model[] = [
    {
      image: 'https://media.sketchfab.com/models/dda567d1ffbd40eabbce7625a48a39ef/thumbnails/84f3614735f048b5838b45f5eb5aa430/01ec6878522a49bc956f9ba4b9fe08f8.jpeg',
      name: 'Elephant',
      price: '$2.99',
      discount: 10,
      category: 'Animals & Pets',
      format: 'FBX',
      polyCount: 'Low',
      license: 'Royalty Free',
      rating: 4,
      pbr: true,
      animated: false,
      rigged: false,
    },
  ];
}
