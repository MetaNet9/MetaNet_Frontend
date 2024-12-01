import {Component, OnInit} from '@angular/core';
import {AdminUserTableComponent} from "../../commonComponents/admin-user-table/admin-user-table.component";
import {AdminnavbarComponent} from "../../commonComponents/adminnavbar/adminnavbar.component";
import {Button} from "primeng/button";
import {CheckboxModule} from "primeng/checkbox";
import {DialogModule} from "primeng/dialog";
import {DividerModule} from "primeng/divider";
import {FloatLabelModule} from "primeng/floatlabel";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {SysadminSidebarComponent} from "../../commonComponents/sysadmin-sidebar/sysadmin-sidebar.component";
import {ToastModule} from "primeng/toast";
import {UserList,error} from "../../domain/models";
import {HttpClient} from "@angular/common/http";
import {ToastService} from "angular-toastify";
import {BASE_url} from "../../app.config";
import {UserTableViewonlyComponent} from "../../commonComponents/user-table-viewonly/user-table-viewonly.component";

@Component({
  selector: 'app-sys-creator',
  standalone: true,
  imports: [
    AdminUserTableComponent,
    AdminnavbarComponent,
    Button,
    CheckboxModule,
    DialogModule,
    DividerModule,
    FloatLabelModule,
    InputTextModule,
    PasswordModule,
    ReactiveFormsModule,
    SysadminSidebarComponent,
    ToastModule,
    UserTableViewonlyComponent
  ],
  templateUrl: './sys-creator.component.html',
  styleUrl: './sys-creator.component.css'
})
export class SysCreatorComponent  implements OnInit{
  data:UserList={users:[],total2:0,activeUsers:0,deactivatedUsers:0};
  constructor(private http: HttpClient,private _toastService: ToastService,private fb: FormBuilder){}
  ngOnInit() {
    this.getUsers()
  }
  getUsers() {
    this.http.get<UserList>(BASE_url+'/auth/users?role=seller',{withCredentials:true}).subscribe({
      next: (data: any) => {
        this.data = data;
        console.log(data);

      },
      error: (error: { error:error }) => {
        if (error.error.statusCode == 401) {
          this._toastService.error('You are not authorized to view this page');
          console.log(error.error.statusCode);
        }
        // console.log(error);
      }

    });
  }


}
