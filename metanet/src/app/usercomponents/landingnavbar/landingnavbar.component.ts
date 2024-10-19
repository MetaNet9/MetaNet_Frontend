import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-landingnavbar',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './landingnavbar.component.html',
  styleUrls: ['./landingnavbar.component.css'], // Update: Corrected property name to 'styleUrls'
})
export class LandingnavbarComponent implements OnInit {
  title = 'metanet';

  loginForm!: FormGroup;
  registerForm!: FormGroup;
  forgotPasswordForm!: FormGroup;
  resetPasswordForm!: FormGroup;  // Added reset password form

  visibleLogin: boolean = false;
  visibleRegister: boolean = false;
  visibleForgotPassword: boolean = false;
  visibleResetPassword: boolean = false;  // Controls the visibility of Reset Password dialog

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Client-side code for burger menu
      this.initMenuToggle();
    }

    this.createLoginForm();
    this.createRegisterForm();
    this.createForgotPasswordForm();
    this.createResetPasswordForm();
  }

  // Initialize menu toggle functionality
  private initMenuToggle() {
    document.addEventListener('DOMContentLoaded', () => {
      // open
      const burger: NodeListOf<HTMLElement> = document.querySelectorAll('.navbar-burger');
      const menu: NodeListOf<HTMLElement> = document.querySelectorAll('.navbar-menu');

      if (burger.length && menu.length) {
        for (let i = 0; i < burger.length; i++) {
          burger[i].addEventListener('click', () => {
            for (let j = 0; j < menu.length; j++) {
              menu[j].classList.toggle('hidden');
            }
          });
        }
      }

      // close
      const close: NodeListOf<HTMLElement> = document.querySelectorAll('.navbar-close');
      const backdrop: NodeListOf<HTMLElement> = document.querySelectorAll('.navbar-backdrop');

      if (close.length) {
        for (let i = 0; i < close.length; i++) {
          close[i].addEventListener('click', () => {
            for (let j = 0; j < menu.length; j++) {
              menu[j].classList.toggle('hidden');
            }
          });
        }
      }

      if (backdrop.length) {
        for (let i = 0; i < backdrop.length; i++) {
          backdrop[i].addEventListener('click', () => {
            for (let j = 0; j < menu.length; j++) {
              menu[j].classList.toggle('hidden');
            }
          });
        }
      }
    });
  }

  // Login form
  private createLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  public login() {
    const isFormValid = this.loginForm.valid;
    console.log(this.loginForm.value);
  }

  // Register form
  private createRegisterForm() {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      userName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    });
  }

  public register() {
    const isFormValid = this.registerForm.valid;
    console.log(this.registerForm.value);
  }

  // Forgot password form
  private createForgotPasswordForm() {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  // Reset password form
  private createResetPasswordForm() {
    this.resetPasswordForm = new FormGroup({
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    });
  }

  public resetPassword() {
    const isFormValid = this.forgotPasswordForm.valid;
    if (isFormValid) {
      const email = this.forgotPasswordForm.get('email')?.value;
      console.log('Password reset link sent to:', email);

      // Show Reset Password popup after email is validated
      this.showResetPassword();
    }
  }

  public confirmResetPassword() {
    const isFormValid = this.resetPasswordForm.valid;
    if (isFormValid) {
      const password = this.resetPasswordForm.get('password')?.value;
      const confirmPassword = this.resetPasswordForm.get('confirmPassword')?.value;
      
      if (password === confirmPassword) {
        console.log('Password has been successfully reset!');
        this.visibleResetPassword = false;  // Close reset password dialog
      } else {
        console.log('Passwords do not match.');
      }
    }
  }

  // Show login dialog
  showLogin() {
    this.visibleLogin = true;
    this.visibleRegister = false;
    this.visibleForgotPassword = false;
    this.visibleResetPassword = false;
  }

  // Show register dialog
  showRegister() {
    this.visibleRegister = true;
    this.visibleLogin = false;
    this.visibleForgotPassword = false;
    this.visibleResetPassword = false;
  }

  // Show forgot password dialog
  showForgotPassword() {
    this.visibleForgotPassword = true;
    this.visibleLogin = false;
    this.visibleRegister = false;
    this.visibleResetPassword = false;
  }

  // Show reset password dialog
  showResetPassword() {
    this.visibleForgotPassword = false;
    this.visibleResetPassword = true;
  }

  // Close reset password dialog
  hideResetPassword() {
    this.visibleResetPassword = false;
  }

  // Close register and open login dialog
  openLogin() {
    this.visibleLogin = true;
    this.visibleRegister = false;
    this.visibleForgotPassword = false;
    this.visibleResetPassword = false;
  }

  // Close login and open forgot password dialog
  openForgotPassword() {
    this.visibleForgotPassword = true;
    this.visibleLogin = false;
    this.visibleRegister = false;
    this.visibleResetPassword = false;
  }
}
