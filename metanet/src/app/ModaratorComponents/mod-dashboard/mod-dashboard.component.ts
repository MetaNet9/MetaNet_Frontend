import {Component, OnInit} from '@angular/core';
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
import {
  ContributionsModeratorPieChartComponent
} from "../../commonComponents/contributions-moderator-pie-chart/contributions-moderator-pie-chart.component";
import {moderatorContributions} from "../../domain/models";

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
    ModeratorSidebarComponent,
    ContributionsModeratorPieChartComponent
  ],
  templateUrl: './mod-dashboard.component.html',
  styleUrl: './mod-dashboard.component.css'
})
export class ModDashboardComponent implements OnInit{
  constructor() { }

  sampleContributions!:moderatorContributions[]
  ngOnInit() {
    this.sampleContributions = [
      {user: "user1", contributions: 10},
      {user: "user2", contributions: 20},
      {user: "user3", contributions: 30},
      {user: "user4", contributions: 40},
      {user: "user5", contributions: 50}
      ]
  }
}
