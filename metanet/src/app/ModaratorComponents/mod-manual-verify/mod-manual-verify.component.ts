import {Component, OnInit} from '@angular/core';
import {AdminUserTableComponent} from "../../commonComponents/admin-user-table/admin-user-table.component";
import {AdminnavbarComponent} from "../../commonComponents/adminnavbar/adminnavbar.component";
import {ModeratorSidebarComponent} from "../../commonComponents/moderator-sidebar/moderator-sidebar.component";
import {NgForOf, NgIf} from "@angular/common";
import {json} from "express";
import {CommonModule} from "@angular/common";
import {ThreeDViewerComponent} from "../../three-dviewer/three-dviewer.component";
import {DialogModule} from "primeng/dialog";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ToastService} from "angular-toastify";
import * as http from "http";
import {BASE_url} from "../../app.config";
import {error} from "../../domain/models";
import {Router} from "@angular/router";

@Component({
  selector: 'app-mod-manual-verify',
  standalone: true,
  imports: [
    CommonModule,
    AdminUserTableComponent,
    AdminnavbarComponent,
    ModeratorSidebarComponent,
    NgForOf,
    NgIf,
    ThreeDViewerComponent,
    DialogModule,
    ReactiveFormsModule

  ],
  templateUrl: './mod-manual-verify.component.html',
  styleUrl: './mod-manual-verify.component.css'
})
export class ModManualVerifyComponent implements OnInit {
  models: any[] = []; // Initialize as an empty array
  color_bg=0xffffff
  visible: boolean = false;
  formGroup = new FormGroup({
    massage: new FormControl("", [Validators.required]),
  });
  get massage() {
    return this.formGroup.get('massage') as FormControl;
  }
  constructor(private http:HttpClient,private _toast_service:ToastService,private router:Router) {}

  ngOnInit(): void {


    // Optional: Handle case where data is undefined
    if (!history.state.data) {
      console.error('No data found in state!');
    }else console.log(history.state.data);
    this.models.push(history.state.data);

  }

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  isArray(value: any): boolean {
    return Array.isArray(value);
  }

  isBoolean(value: any): boolean {
    return typeof value === 'boolean';
  }



  reject() {
    this.visible = true;
  }

  accept(id: number) {
    console.log(id);
    this.http.patch(BASE_url+"/review-requests/accept/"+id,{},{withCredentials:true}).subscribe({
      next: (data) => {
        this._toast_service.success("Model Accepted")
        this.router.navigate(["/mod_manual_request"])
      },
      error: (error:{error:error}) => {
        this._toast_service.error(error.error.message||"Something went wrong")
        console.error('There was an error!', error);
      }
    })
  }
  sendReject(id:number) {
    if(this.massage.invalid){
      this._toast_service.error("Please enter a message")
      return;
    }else {
      console.log(this.massage.value);
      this.http.post(BASE_url+"/review-requests/decline/"+id,{reviewNotes:this.massage.value},{withCredentials:true}).subscribe({
        next: (data) => {
          this._toast_service.success("Model Rejected")
          this.router.navigate(["/mod_manual_request"])
        },
        error: (error:{error:error}) => {
          this._toast_service.error(error.error.message||"Something went wrong")
          console.error('There was an error!', error);
        }
      })
    }
    //   console.log(id);

    //
  }
}


