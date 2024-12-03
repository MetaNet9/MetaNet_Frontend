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
import {moderatorContributions, ModeratorStats} from "../../domain/models";
import {
  ModRecentActionsTableComponent
} from "../../commonComponents/mod-recent-actions-table/mod-recent-actions-table.component";
import {HttpClient} from "@angular/common/http";
import {BASE_url} from "../../app.config";

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
    ContributionsModeratorPieChartComponent,
    ModRecentActionsTableComponent
  ],
  templateUrl: './mod-dashboard.component.html',
  styleUrl: './mod-dashboard.component.css'
})
export class ModDashboardComponent implements OnInit{

  StatData!:ModeratorStats;
  constructor(private http:HttpClient) { }


  ngOnInit() {
    this.getData()
  }
  getData(){
    this.http.get<ModeratorStats>(BASE_url+'/review-requests/moderator-dashboard',{withCredentials:true}).subscribe({
      next: data => {
        this.StatData = data;
      },
      error: error => {
        console.error('There was an error!', error);
      }
    })
  }
}
