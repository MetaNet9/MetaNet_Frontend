import {Component, OnInit} from '@angular/core';
import {AdminUserTableComponent} from "../../commonComponents/admin-user-table/admin-user-table.component";
import {AdminnavbarComponent} from "../../commonComponents/adminnavbar/adminnavbar.component";
import {SysadminSidebarComponent} from "../../commonComponents/sysadmin-sidebar/sysadmin-sidebar.component";
import {UserList,error} from "../../domain/models";
import {HttpClient} from "@angular/common/http";
import {ToastService} from "angular-toastify";
import {FormBuilder} from "@angular/forms";
import {BASE_url} from "../../app.config";
import {UserTableViewonlyComponent} from "../../commonComponents/user-table-viewonly/user-table-viewonly.component";

@Component({
  selector: 'app-sys-users',
  standalone: true,
  imports: [
    AdminUserTableComponent,
    AdminnavbarComponent,
    SysadminSidebarComponent,
    UserTableViewonlyComponent
  ],
  templateUrl: './sys-users.component.html',
  styleUrl: './sys-users.component.css'
})
export class SysUsersComponent implements OnInit{
  data:UserList={users:[],total2:0,activeUsers:0,deactivatedUsers:0};
  constructor(private http: HttpClient,private _toastService: ToastService,private fb: FormBuilder){}
  ngOnInit() {
    this.getUsers()
  }
  getUsers() {
    this.http.get<UserList>(BASE_url+'/auth/users?role=user',{withCredentials:true}).subscribe({
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
