import {Component, OnInit} from '@angular/core';
import {AdminSidebarComponent} from "../../commonComponents/admin-sidebar/admin-sidebar.component";
import {AdminnavbarComponent} from "../../commonComponents/adminnavbar/adminnavbar.component";
import {TableAdmin4ColoumComponent} from "../../commonComponents/table-admin-4-coloum/table-admin-4-coloum.component";
import {AdminUserTableComponent} from "../../commonComponents/admin-user-table/admin-user-table.component";
import {Button} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {CommonModule} from "@angular/common";
import {InputTextModule} from "primeng/inputtext";
import {InputGroupModule} from "primeng/inputgroup";
import {InputGroupAddonModule} from "primeng/inputgroupaddon";
import {PasswordModule} from "primeng/password";
import {FormsModule} from "@angular/forms";
import {FloatLabelModule} from "primeng/floatlabel";
import {DividerModule} from "primeng/divider";
import {CheckboxModule} from "primeng/checkbox";
import {any} from "three/examples/jsm/nodes/math/MathNode";
import {string} from "three/examples/jsm/nodes/shadernode/ShaderNode";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";




@Component({
  selector: 'app-admin-sys-admin',
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
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './admin-sys-admin.component.html',
  styleUrl: './admin-sys-admin.component.css'
})



export class AdminSysAdminComponent {
  visible: boolean = false;
  constructor(private messageService: MessageService) {
  }

  formdata = {
    firstname: '',
    lastname: '',
    email: '',
    contactno: '',
    username: '',
    password: '',
    categories: ['']

  };

  selectedCategories: string[] = [];

  categories: any[] = [
    { name: 'Accounting', key: 'A' },
    { name: 'Marketing', key: 'M' },
    { name: 'Production', key: 'P' },
    { name: 'Research', key: 'R' }
  ];

  showDialog() {
    this.visible = true;
  }

  submit() {

    this.formdata.categories = this.selectedCategories;
    console.log(this.formdata);
    this.showToast();
    this.visible=false;
  }


  showToast() {
    this.messageService.clear();
    this.messageService.add({ key: 'toast1', severity: 'success', summary: 'Success', detail: 'You have successfully register a new System Administrator' });
  }

}
