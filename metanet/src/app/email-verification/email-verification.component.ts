import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-verification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './email-verification.component.html',
  styleUrl: './email-verification.component.css'
})
export class EmailVerificationComponent {
  @Input() isEmailVerified: boolean = true;

  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
