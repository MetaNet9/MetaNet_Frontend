import { Component } from '@angular/core';
import {
    AdminCardWithChartComponent
} from "../../commonComponents/admin-card-with-chart/admin-card-with-chart.component";
import {AdminSidebarComponent} from "../../commonComponents/admin-sidebar/admin-sidebar.component";
import {AdminnavbarComponent} from "../../commonComponents/adminnavbar/adminnavbar.component";
import {
    SalesByCategoryPieChartComponent
} from "../../commonComponents/sales-by-category-pie-chart/sales-by-category-pie-chart.component";
import {TopModelsTableComponent} from "../../commonComponents/top-models-table/top-models-table.component";
import {WeeklyRevenueChartComponent} from "../../commonComponents/weekly-revenue-chart/weekly-revenue-chart.component";
import {ModeratorSidebarComponent} from "../../commonComponents/moderator-sidebar/moderator-sidebar.component";

@Component({
  selector: 'app-mod-dashboard',
  standalone: true,
  imports: [
    AdminCardWithChartComponent,
    AdminSidebarComponent,
    AdminnavbarComponent,
    SalesByCategoryPieChartComponent,
    TopModelsTableComponent,
    WeeklyRevenueChartComponent,
    ModeratorSidebarComponent
  ],
  templateUrl: './mod-dashboard.component.html',
  styleUrl: './mod-dashboard.component.css'
})
export class ModDashboardComponent {

}
