import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { first } from 'rxjs';



@Component({
  selector: 'app-landingnavbar',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './landingnavbar.component.html',
  styleUrl: './landingnavbar.component.css'
})
export class LandingnavbarComponent implements OnInit {
  title = 'metanet';

  loginForm!: FormGroup;
  registerForm!: FormGroup;




  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Client-side code
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


    this.createLoginForm();
    this.createRegisterForm();

  }

  // login form
  private createLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required , Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  public login(){
    const isFormValid = this.loginForm.valid;
    // debugger;
    console.log(this.loginForm.value);
  }


  // register form
  private createRegisterForm() {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      userName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required , Validators.email]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    });
  }

  public register(){
    const isFormValid = this.registerForm.valid;
    // debugger;
    console.log(this.registerForm.value);
  }









  // login dialog
  visibleLogin: boolean = false;
  showLogin() {
      this.visibleLogin = true;
  }


  // register dialog
  visibleRegister: boolean = false;

  showRegister() {
      this.visibleRegister = true;
  }


  // close login dialog and open register dialog
  openRegister(){
    this.visibleRegister = true;
    this.visibleLogin = false;
  }

  // close register dialog and open login dialog
  openLogin(){
    this.visibleLogin = true;
    this.visibleRegister = false;
  }
}
