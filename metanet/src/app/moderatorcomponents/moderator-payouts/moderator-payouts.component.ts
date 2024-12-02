import { Component } from '@angular/core';
import {ModeratorSideBarComponent} from "../../commonComponents/moderator-side-bar/moderator-side-bar.component";
import {AdminnavbarComponent} from "../../commonComponents/adminnavbar/adminnavbar.component";
import {CalendarModule} from "primeng/calendar";
import {
    SalesByCategoryPieChartComponent
} from "../../commonComponents/sales-by-category-pie-chart/sales-by-category-pie-chart.component";
import {WeeklyRevenueChartComponent} from "../../commonComponents/weekly-revenue-chart/weekly-revenue-chart.component";
import {TableAdmin4ColoumComponent} from "../../commonComponents/table-admin-4-coloum/table-admin-4-coloum.component";


@Component({
  selector: 'app-moderator-payouts',
  standalone: true,
  imports: [

    ModeratorSideBarComponent,
    AdminnavbarComponent,
    CalendarModule,
    SalesByCategoryPieChartComponent,
    WeeklyRevenueChartComponent,
    TableAdmin4ColoumComponent
  ],
  templateUrl: './moderator-payouts.component.html',
  styleUrl: './moderator-payouts.component.css'
})
export class ModeratorPayoutsComponent {

}
