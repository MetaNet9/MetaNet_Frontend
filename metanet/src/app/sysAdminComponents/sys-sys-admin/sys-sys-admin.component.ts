import { Component } from '@angular/core';
import {AdminUserTableComponent} from "../../commonComponents/admin-user-table/admin-user-table.component";
import {AdminnavbarComponent} from "../../commonComponents/adminnavbar/adminnavbar.component";
import {SysadminSidebarComponent} from "../../commonComponents/sysadmin-sidebar/sysadmin-sidebar.component";
import {
  SalesByCategoryPieChartComponent
} from "../../commonComponents/sales-by-category-pie-chart/sales-by-category-pie-chart.component";
import {WeeklyRevenueChartComponent} from "../../commonComponents/weekly-revenue-chart/weekly-revenue-chart.component";

@Component({
  selector: 'app-sys-sys-admin',
  standalone: true,
  imports: [
    AdminUserTableComponent,
    AdminnavbarComponent,
    SysadminSidebarComponent,
    SalesByCategoryPieChartComponent,
    WeeklyRevenueChartComponent
  ],
  templateUrl: './sys-sys-admin.component.html',
  styleUrl: './sys-sys-admin.component.css'
})
export class SysSysAdminComponent {

}
