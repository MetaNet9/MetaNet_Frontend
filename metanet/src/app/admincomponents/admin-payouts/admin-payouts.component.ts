import { Component } from '@angular/core';
import {AdminSidebarComponent} from "../../commonComponents/admin-sidebar/admin-sidebar.component";
import {AdminnavbarComponent} from "../../commonComponents/adminnavbar/adminnavbar.component";
import {CalendarModule} from "primeng/calendar";
import {
    SalesByCategoryPieChartComponent
} from "../../commonComponents/sales-by-category-pie-chart/sales-by-category-pie-chart.component";
import {WeeklyRevenueChartComponent} from "../../commonComponents/weekly-revenue-chart/weekly-revenue-chart.component";
import {TableAdmin4ColoumComponent} from "../../commonComponents/table-admin-4-coloum/table-admin-4-coloum.component";

@Component({
  selector: 'app-admin-payouts',
  standalone: true,
  imports: [
    AdminSidebarComponent,
    AdminnavbarComponent,
    CalendarModule,
    SalesByCategoryPieChartComponent,
    WeeklyRevenueChartComponent,
    TableAdmin4ColoumComponent
  ],
  templateUrl: './admin-payouts.component.html',
  styleUrl: './admin-payouts.component.css'
})
export class AdminPayoutsComponent {

}
