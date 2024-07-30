import { Component } from '@angular/core';
import { UserNavbarComponent } from "../user-navbar/user-navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { SelectButtonModule } from 'primeng/selectbutton';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-upload-form',
  standalone: true,
  imports: [UserNavbarComponent, FooterComponent,SelectButtonModule,CommonModule,FormsModule],
  templateUrl: './upload-form.component.html',
  styleUrl: './upload-form.component.css'
})
export class UploadFormComponent {
  value!: number;

  options: any[] = [
      { name: 'No', value: 1 },
      { name: 'Free', value: 2 },
      { name: 'Paid', value: 3 }
  ];
}

