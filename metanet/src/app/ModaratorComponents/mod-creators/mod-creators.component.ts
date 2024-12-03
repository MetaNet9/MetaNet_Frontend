import {Component, OnInit} from '@angular/core';
import {AdminUserTableComponent} from "../../commonComponents/admin-user-table/admin-user-table.component";
import {AdminnavbarComponent} from "../../commonComponents/adminnavbar/adminnavbar.component";
import {SysadminSidebarComponent} from "../../commonComponents/sysadmin-sidebar/sysadmin-sidebar.component";
import {ModeratorSidebarComponent} from "../../commonComponents/moderator-sidebar/moderator-sidebar.component";
import {HttpClient} from "@angular/common/http";
import {UserList} from "../../domain/models";
import {BASE_url} from "../../app.config";

@Component({
  selector: 'app-mod-creators',
  standalone: true,
  imports: [
    AdminUserTableComponent,
    AdminnavbarComponent,
    SysadminSidebarComponent,
    ModeratorSidebarComponent
  ],
  templateUrl: './mod-creators.component.html',
  styleUrl: './mod-creators.component.css'
})
export class ModCreatorsComponent implements OnInit{
  response: UserList={users:[],total2:0,activeUsers:0,deactivatedUsers:0};
  constructor(private http:HttpClient) { }
  ngOnInit() {
    this.http.get<UserList>(BASE_url+"/auth/users?role=seller",{withCredentials:true}).subscribe({
      next: (data) => {
        this.response = data;
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    })




  }

}
