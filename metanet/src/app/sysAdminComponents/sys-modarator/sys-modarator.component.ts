import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {AdminSidebarComponent} from "../../commonComponents/admin-sidebar/admin-sidebar.component";
import {AdminUserTableComponent} from "../../commonComponents/admin-user-table/admin-user-table.component";
import {AdminnavbarComponent} from "../../commonComponents/adminnavbar/adminnavbar.component";
import {Button} from "primeng/button";
import {CheckboxModule} from "primeng/checkbox";
import {DialogModule} from "primeng/dialog";
import {DividerModule} from "primeng/divider";
import {FloatLabelModule} from "primeng/floatlabel";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {ToastModule} from "primeng/toast";
import {string} from "three/examples/jsm/nodes/shadernode/ShaderNode";
import {TableAdmin4ColoumComponent} from "../../commonComponents/table-admin-4-coloum/table-admin-4-coloum.component";
import {InputGroupModule} from "primeng/inputgroup";
import {InputGroupAddonModule} from "primeng/inputgroupaddon";
import {MessageService} from "primeng/api";
import {SysadminSidebarComponent} from "../../commonComponents/sysadmin-sidebar/sysadmin-sidebar.component";
import {isPlatformBrowser, NgIf} from "@angular/common";
import {UserList,error} from "../../domain/models";
import {HttpClient} from "@angular/common/http";
import {ToastService} from "angular-toastify";
import {BASE_url} from "../../app.config";

@Component({
  selector: 'app-sys-modarator',
  standalone: true,
  imports: [
    AdminSidebarComponent,
    AdminnavbarComponent,
    TableAdmin4ColoumComponent,
    AdminUserTableComponent,
    Button,
    DialogModule,
    InputTextModule,
    InputGroupModule,
    InputGroupAddonModule,
    PasswordModule,
    FormsModule,
    FloatLabelModule,
    DividerModule,
    CheckboxModule,
    ToastModule,
    SysadminSidebarComponent,
    NgIf,
    ReactiveFormsModule
  ],
  providers: [MessageService],
  templateUrl: './sys-modarator.component.html',
  styleUrl: './sys-modarator.component.css'
})
export class SysModaratorComponent implements OnInit {
  visible: boolean = false;
  data: UserList = {users: [], total2: 0, activeUsers: 0, deactivatedUsers: 0};
  adminForm: FormGroup;

  constructor(private http: HttpClient, private _toastService: ToastService, private fb: FormBuilder) {
    this.adminForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      userName: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      contactNo: ['', [Validators.required, Validators.pattern(/^\d+$/)]], // Pattern ensures numeric input
      roles: ['moderator'],
    });
  }

  ngOnInit() {
    this.getUsers()
  }

  getUsers() {
    this.http.get<UserList>(BASE_url + '/auth/users?role=moderator', {withCredentials: true}).subscribe({
      next: (data: any) => {
        this.data = data;
        console.log(data);

      },
      error: (error: { error: error }) => {
        if (error.error.statusCode == 401) {
          this._toastService.error('You are not authorized to view this page');
          console.log(error.error.statusCode);
        }
        // console.log(error);
      }

    });
  }


  showDialog() {
    this.visible = true;
  }

  submit() {
    if (this.adminForm.valid) {
      const formData = this.adminForm.value;
      console.log('Form submitted successfully:', formData);
      this.postAdmin()
    } else {
      console.log('Form is invalid');
      this._toastService.error('Check the form for errors');
      this.adminForm.markAllAsTouched(); // Mark all fields as touched to display errors
    }
  }

  postAdmin() {
    this.http.post(BASE_url + '/auth/create-user', this.adminForm.value, {withCredentials: true}).subscribe({
      next: (response) => {
        console.log('Admin added successfully', response);
        this._toastService.success('System Admin added successfully');
        this.visible = false;
        this.getUsers()
      },
      error: (error: { error: { message: string } }) => {
        console.error('There was an error!', error.error.message);
        this._toastService.error(error.error.message);

      }
    });
  }
}
