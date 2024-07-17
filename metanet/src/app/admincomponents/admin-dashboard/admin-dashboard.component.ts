import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { AdminnavbarComponent } from 'src/app/commonComponents/adminnavbar/adminnavbar.component';
import { SalesByCategoryPieChartComponent } from 'src/app/commonComponents/sales-by-category-pie-chart/sales-by-category-pie-chart.component';
import { TopModelsTableComponent } from 'src/app/commonComponents/top-models-table/top-models-table.component';
import { WeeklyRevenueChartComponent } from 'src/app/commonComponents/weekly-revenue-chart/weekly-revenue-chart.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    ChartModule,
    AdminnavbarComponent,
    WeeklyRevenueChartComponent,
    TopModelsTableComponent,
    SalesByCategoryPieChartComponent
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit {
  totalmodeldata: any;
  totalUsers: any;
  totalRevenue: any;
  monthlyRevenue: any;
  options: any;

  ngOnInit() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

      this.totalmodeldata = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            // label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 100],
            fill: false,
            borderColor: documentStyle.getPropertyValue('--pink-500'),
            tension: 0.5
          }
        ]
      };

      this.totalUsers = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            // label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: documentStyle.getPropertyValue('--blue-500'),
            tension: 0.5
          }
        ]
      };


      this.totalRevenue = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            // label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 70],
            fill: false,
            borderColor: documentStyle.getPropertyValue('--green-500'),
            tension: 0.5
          }
        ]
      };

      this.monthlyRevenue = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            // label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 60],
            fill: false,
            borderColor: documentStyle.getPropertyValue('--yellow-500'),
            tension: 0.5
          }
        ]
      };









      let delayed: boolean;
      this.options = {
        maintainAspectRatio: true,
        aspectRatio: 0.6,
        plugins: {
          legend: {
            labels: {
              // color: textColor
              display: false
            },
            display: false
          }
        },

        scales: {
          x: {
            ticks: {
              // color: textColorSecondary
              display: false
            },
            grid: {
              // color: surfaceBorder,
              // drawBorder: false,
              display: false
            },
            display: false
          },
          y: {
            ticks: {
              // color: textColorSecondary
              display: false
            },
            grid: {
              // color: surfaceBorder,
              // drawBorder: false
              display: false
            },
            display: false
          }
        },
        animation: {
          onComplete: () => {
            delayed = true;
          },
          delay: (context: { type: string; mode: string; dataIndex: number; datasetIndex: number; }) => {
            let delay = 0;
            if (context.type === 'data' && context.mode === 'default' && !delayed) {
              delay = context.dataIndex * 200 + context.datasetIndex * 10;
            }
            return delay;
          },
        },
      };
    }
  }
}
