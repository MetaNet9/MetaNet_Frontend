import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminCardWithChartComponent } from "../../commonComponents/admin-card-with-chart/admin-card-with-chart.component";
import { AdminSidebarComponent } from "../../commonComponents/admin-sidebar/admin-sidebar.component";
import { AdminnavbarComponent } from "../../commonComponents/adminnavbar/adminnavbar.component";
import { SalesByCategoryPieChartComponent } from "../../commonComponents/sales-by-category-pie-chart/sales-by-category-pie-chart.component";
import { TopModelsTableComponent } from "../../commonComponents/top-models-table/top-models-table.component";
import { WeeklyRevenueChartComponent } from "../../commonComponents/weekly-revenue-chart/weekly-revenue-chart.component";
import { SysadminSidebarComponent } from "../../commonComponents/sysadmin-sidebar/sysadmin-sidebar.component";
import { DividerModule } from "primeng/divider";

@Component({
  selector: 'app-sys-dashboard',
  standalone: true,
  imports: [
    AdminCardWithChartComponent,
    AdminSidebarComponent,
    AdminnavbarComponent,
    SalesByCategoryPieChartComponent,
    TopModelsTableComponent,
    WeeklyRevenueChartComponent,
    SysadminSidebarComponent,
    DividerModule
  ],
  templateUrl: './sys-dashboard.component.html',
  styleUrls: ['./sys-dashboard.component.css']
})
export class SysDashboardComponent implements OnInit {
  totalmodeldata: any;
  totalUsers: any;
  totalRevenue: any;
  monthlyRevenue: any;
  statistics: any = {};  // Will hold the statistics data
  chartOptions: any;
  userName: string = 'Sarah';  // Example dynamic name, could be fetched from auth service

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchStatistics();  // Fetch data from the API on initialization
  }

  // Fetch statistics from the backend API
  fetchStatistics(): void {
    this.http.get('http://localhost:3000/statistics')  // Update with the correct API endpoint
      .subscribe((data: any) => {
        this.statistics = data;  // Populate the statistics object with API response
        this.prepareChartData(data);  // Prepare chart data
        this.chartOptions = this.getChartOptions();  // Set up chart options
      });
  }

  // Prepare chart data
  prepareChartData(data: any): void {
    this.totalmodeldata = {
      labels: data.lastWeekRevenue.map((entry: any) => entry.day),
      datasets: [
        {
          data: data.lastWeekRevenue.map((entry: any) => entry.value),
          fill: false,
          borderColor: 'pink',
          tension: 0.5,
          pointRadius: 0,
          pointHoverRadius: 0
        }
      ]
    };

    this.totalUsers = this.totalRevenue = this.monthlyRevenue = this.totalmodeldata; // Example, you can set different chart data here based on the response
  }

  // Get chart options
  getChartOptions(): any {
    const totalDuration = 1000;
    const delayBetweenPoints = totalDuration / this.totalmodeldata.datasets[0].data.length;
    const previousY = (ctx: any) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;

    const animation = {
      x: {
        type: 'number',
        easing: 'linear',
        duration: delayBetweenPoints,
        from: NaN, // the point is initially skipped
        delay(ctx: any) {
          if (ctx.type !== 'data' || ctx.xStarted) return 0;
          ctx.xStarted = true;
          return ctx.index * delayBetweenPoints;
        }
      },
      y: {
        type: 'number',
        easing: 'linear',
        duration: delayBetweenPoints,
        from: previousY,
        delay(ctx: any) {
          if (ctx.type !== 'data' || ctx.yStarted) return 0;
          ctx.yStarted = true;
          return ctx.index * delayBetweenPoints;
        }
      }
    };

    return {
      maintainAspectRatio: true,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: { display: false }
        }
      },
      scales: {
        x: {
          ticks: { display: false },
          grid: { display: false },
          display: false
        },
        y: {
          ticks: { display: false },
          grid: { display: false },
          display: false
        }
      },
      animation
    };
  }
}
