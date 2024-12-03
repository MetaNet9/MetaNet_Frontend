import { Component } from '@angular/core';
import { UserNavbarComponent } from "../user-navbar/user-navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seller-register',
  standalone: true,
  imports: [UserNavbarComponent, FooterComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './seller-register.component.html',
  styleUrls: ['./seller-register.component.css']
})
export class SellerRegisterComponent {
  sellerDetails: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.sellerDetails = this.fb.group({
      profilePicture: ['', Validators.required],
      displayName: ['', [Validators.required, Validators.minLength(3)]],
      biography: ['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      skills: [''],
      personalWebsite: ['', Validators.pattern(/https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)],
      twitterUsername: [''],
      facebookUsername: [''],
      linkedInUsername: [''],
      bankName: ['', Validators.required],
      accountNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{9,18}$/)]],
      branch: ['', Validators.required],
      accountName: ['', Validators.required],
    });
  }

  // ceratorRegister() {
  //   if (this.sellerDetails.invalid) {
  //     this.sellerDetails.markAllAsTouched();
  //     return;
  //   }

  //   // Prepare form data to send, including file uploads
  //   const formData = new FormData();
  //   Object.entries(this.sellerDetails.value).forEach(([key, value]) => {
  //     formData.append(key, value as string);
  //   });

  //   this.http.post('http://localhost:3000/sellers', formData).subscribe(
  //     response => {
  //       console.log('Success:', response);
  //     },
  //     error => {
  //       console.error('Error:', error);
  //     }
  //   );
  // }

  // ceratorRegister() {
  //   if (this.sellerDetails.valid) {
  //     const formData = new FormData();
  //     Object.keys(this.sellerDetails.controls).forEach(key => {
  //       formData.append(key, this.sellerDetails.get(key)?.value);
  //     });

  //     // Get the token from localStorage or another secure location
  //     // const token = localStorage.getItem('authToken'); // Ensure this matches your auth setup

  //     // const headers = new HttpHeaders({
  //     //   Authorization: `Bearer ${token}`,
  //     // });

  //     this.http.post('http://localhost:3000/sellers', formData, {withCredentials: true}).subscribe({
  //       next: (response) => {
  //         console.log('Profile saved successfully', response);
  //         alert('Profile saved successfully!');
  //       },
  //       error: (error) => {
  //         console.error('Error saving profile', error);
  //         alert('Error saving profile.');
  //       }
  //     });
  //   } else {
  //     alert('Please fill in all required fields correctly.');
  //   }
  // }

  ceratorRegister() {
    if (this.sellerDetails.valid) {
      // Convert form values to a plain object
      const sellerData = this.sellerDetails.value;

      // Get the token from localStorage or another secure location
      // const token = localStorage.getItem('authToken'); // Ensure this matches your auth setup

      // Set headers to indicate JSON payload
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${token}`, // Uncomment if token-based auth is used
      });

      this.http.post('http://localhost:3000/sellers', sellerData, { headers, withCredentials: true }).subscribe({
        next: (response) => {
          console.log('Profile saved successfully', response);
          alert('Profile saved successfully!');
        },
        error: (error) => {
          console.error('Error saving profile', error);
          alert('Error saving profile.');
        }
      });
    } else {
      alert('Please fill in all required fields correctly.');
      this.sellerDetails.markAllAsTouched(); // Highlight invalid fields
    }
  }

}
