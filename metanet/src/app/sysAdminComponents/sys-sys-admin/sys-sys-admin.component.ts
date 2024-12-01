import {Component, OnInit} from '@angular/core';
import {AdminUserTableComponent} from "../../commonComponents/admin-user-table/admin-user-table.component";
import {AdminnavbarComponent} from "../../commonComponents/adminnavbar/adminnavbar.component";
import {SysadminSidebarComponent} from "../../commonComponents/sysadmin-sidebar/sysadmin-sidebar.component";
import {
  SalesByCategoryPieChartComponent
} from "../../commonComponents/sales-by-category-pie-chart/sales-by-category-pie-chart.component";
import {WeeklyRevenueChartComponent} from "../../commonComponents/weekly-revenue-chart/weekly-revenue-chart.component";
import {UserTableViewonlyComponent} from "../../commonComponents/user-table-viewonly/user-table-viewonly.component";
import {UserList,error} from "../../domain/models";
import {BASE_url} from "../../app.config";
import {HttpClient} from "@angular/common/http";
import {ToastService} from "angular-toastify";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-sys-sys-admin',
  standalone: true,
  imports: [
    AdminUserTableComponent,
    AdminnavbarComponent,
    SysadminSidebarComponent,
    SalesByCategoryPieChartComponent,
    WeeklyRevenueChartComponent,
    UserTableViewonlyComponent
  ],
  templateUrl: './sys-sys-admin.component.html',
  styleUrl: './sys-sys-admin.component.css'
})
export class SysSysAdminComponent implements OnInit{
  data:UserList={users:[],total2:0,activeUsers:0,deactivatedUsers:0};
  constructor(private http: HttpClient,private _toastService: ToastService,private fb: FormBuilder){}
  ngOnInit() {
    this.getUsers()
  }
  getUsers() {
    this.http.get<UserList>(BASE_url+'/auth/users?role=sysadmin',{withCredentials:true}).subscribe({
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
