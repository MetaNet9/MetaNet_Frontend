import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {AdminSidebarComponent} from "../../commonComponents/admin-sidebar/admin-sidebar.component";
import {AdminUserTableComponent} from "../../commonComponents/admin-user-table/admin-user-table.component";
import {AdminnavbarComponent} from "../../commonComponents/adminnavbar/adminnavbar.component";
import {Button} from "primeng/button";
import {CheckboxModule} from "primeng/checkbox";
import {DialogModule} from "primeng/dialog";
import {DividerModule} from "primeng/divider";
import {FloatLabelModule} from "primeng/floatlabel";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {ToastModule} from "primeng/toast";
import {string} from "three/examples/jsm/nodes/shadernode/ShaderNode";
import {TableAdmin4ColoumComponent} from "../../commonComponents/table-admin-4-coloum/table-admin-4-coloum.component";
import {InputGroupModule} from "primeng/inputgroup";
import {InputGroupAddonModule} from "primeng/inputgroupaddon";
import {MessageService} from "primeng/api";
import {SysadminSidebarComponent} from "../../commonComponents/sysadmin-sidebar/sysadmin-sidebar.component";
import {isPlatformBrowser} from "@angular/common";

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
    SysadminSidebarComponent
  ],
  providers: [MessageService],
  templateUrl: './sys-modarator.component.html',
  styleUrl: './sys-modarator.component.css'
})
export class SysModaratorComponent {
  visible: boolean = false;
  isopen: boolean = true;
  constructor(private messageService: MessageService,@Inject(PLATFORM_ID) private platformId: Object) {
  }



  showDialog() {
    if (isPlatformBrowser(this.platformId)) {
      this.visible = true;
    }
  }

  rowclicked() {
    if (isPlatformBrowser(this.platformId)) {
      this.isopen=true;
    }
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
    { name: 'Review Models', key: 'A' },
    { name: 'Approve Models', key: 'M' },
    { name: 'Reject Models', key: 'P' },
    { name: 'Comment on Models', key: 'R' }
  ];



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
