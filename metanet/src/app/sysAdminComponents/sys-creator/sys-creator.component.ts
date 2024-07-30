import { Component } from '@angular/core';
import {AdminUserTableComponent} from "../../commonComponents/admin-user-table/admin-user-table.component";
import {AdminnavbarComponent} from "../../commonComponents/adminnavbar/adminnavbar.component";
import {Button} from "primeng/button";
import {CheckboxModule} from "primeng/checkbox";
import {DialogModule} from "primeng/dialog";
import {DividerModule} from "primeng/divider";
import {FloatLabelModule} from "primeng/floatlabel";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {ReactiveFormsModule} from "@angular/forms";
import {SysadminSidebarComponent} from "../../commonComponents/sysadmin-sidebar/sysadmin-sidebar.component";
import {ToastModule} from "primeng/toast";

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
        ToastModule
    ],
  templateUrl: './sys-creator.component.html',
  styleUrl: './sys-creator.component.css'
})
export class SysCreatorComponent {

}
