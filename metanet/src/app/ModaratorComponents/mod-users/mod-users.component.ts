import { Component } from '@angular/core';
import {AdminUserTableComponent} from "../../commonComponents/admin-user-table/admin-user-table.component";
import {AdminnavbarComponent} from "../../commonComponents/adminnavbar/adminnavbar.component";
import {SysadminSidebarComponent} from "../../commonComponents/sysadmin-sidebar/sysadmin-sidebar.component";
import {ModeratorSidebarComponent} from "../../commonComponents/moderator-sidebar/moderator-sidebar.component";

@Component({
  selector: 'app-mod-users',
  standalone: true,
  imports: [
    AdminUserTableComponent,
    AdminnavbarComponent,
    SysadminSidebarComponent,
    ModeratorSidebarComponent
  ],
  templateUrl: './mod-users.component.html',
  styleUrl: './mod-users.component.css'
})
export class ModUsersComponent {

}
