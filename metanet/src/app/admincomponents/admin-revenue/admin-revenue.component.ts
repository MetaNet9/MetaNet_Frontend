import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { AdminnavbarComponent } from 'src/app/commonComponents/adminnavbar/adminnavbar.component';
import { WeeklyRevenueChartComponent } from "../../commonComponents/weekly-revenue-chart/weekly-revenue-chart.component";
import { SalesByCategoryPieChartComponent } from "../../commonComponents/sales-by-category-pie-chart/sales-by-category-pie-chart.component";
import {AdminSidebarComponent} from "../../commonComponents/admin-sidebar/admin-sidebar.component";

@Component({
  selector: 'app-admin-revenue',
  standalone: true,
    imports: [
        AdminnavbarComponent,
        CalendarModule,
        FormsModule,
        WeeklyRevenueChartComponent,
        SalesByCategoryPieChartComponent,
        AdminSidebarComponent
    ],
  templateUrl: './admin-revenue.component.html',
  styleUrl: './admin-revenue.component.css'
})
export class AdminRevenueComponent {
  date1: Date | undefined;

  date2: Date | undefined;
}
