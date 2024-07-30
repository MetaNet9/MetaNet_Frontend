import { Component } from '@angular/core';
import { UserNavbarComponent } from "../user-navbar/user-navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { SelectButtonModule } from 'primeng/selectbutton';

@Component({
  selector: 'app-upload-form',
  standalone: true,
  imports: [UserNavbarComponent, FooterComponent,SelectButtonModule],
  templateUrl: './upload-form.component.html',
  styleUrl: './upload-form.component.css'
})
export class UploadFormComponent {

}

export class SelectButton{
  value!: number;
  
  options: any[] = [
      { name: 'No', value: 1 },
      { name: 'Free', value: 2 },
      { name: 'Paid', value: 3 }
  ];}
