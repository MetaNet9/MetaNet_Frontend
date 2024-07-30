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
import {SysadminSidebarComponent} from "../../commonComponents/sysadmin-sidebar/sysadmin-sidebar.component";
import {DividerModule} from "primeng/divider";

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
  styleUrl: './sys-dashboard.component.css'
})
export class SysDashboardComponent implements OnInit{
  totalmodeldata: any;
  totalUsers: any;
  totalRevenue: any;
  monthlyRevenue: any;
  options: any;




  ngOnInit() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const documentStyle = getComputedStyle(document.documentElement);
      // const textColor = documentStyle.getPropertyValue('--text-color');
      // const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      // const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

      this.totalmodeldata = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            // label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 100],
            fill: false,
            borderColor: documentStyle.getPropertyValue('--pink-500'),
            tension: 0.5,
            pointRadius: 0,
            pointHoverRadius: 0
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
            borderColor: documentStyle.getPropertyValue('--pink-500'),
            tension: 0.5,
            pointRadius: 0,
            pointHoverRadius: 0
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
            borderColor: documentStyle.getPropertyValue('--pink-500'),
            tension: 0.5,
            pointRadius: 0,
            pointHoverRadius: 0
          }
        ]
      };

      this.monthlyRevenue = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            // label: 'First Dataset',
            data: [65, 20, 80, 81, 56, 55, 100],
            fill: false,
            borderColor: documentStyle.getPropertyValue('--pink-500'),
            tension: 0.5,
            pointRadius: 0,
            pointHoverRadius: 0
          }
        ]
      };







      const totalDuration = 1000;
      const delayBetweenPoints = totalDuration / this.totalmodeldata.datasets[0].data.length;
      const previousY = (ctx: { index: number; chart: { scales: { y: { getPixelForValue: (arg0: number) => any; }; }; getDatasetMeta: (arg0: any) => { (): any; new(): any; data: { getProps: (arg0: string[], arg1: boolean) => { (): any; new(): any; y: any; }; }[]; }; }; datasetIndex: any; }) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
      const animation = {
        x: {
          type: 'number',
          easing: 'linear',
          duration: delayBetweenPoints,
          from: NaN, // the point is initially skipped
          delay(ctx: { type: string; xStarted: boolean; index: number; }) {
            if (ctx.type !== 'data' || ctx.xStarted) {
              return 0;
            }
            ctx.xStarted = true;
            return ctx.index * delayBetweenPoints;
          }
        },
        y: {
          type: 'number',
          easing: 'linear',
          duration: delayBetweenPoints,
          from: previousY,
          delay(ctx: { type: string; yStarted: boolean; index: number; }) {
            if (ctx.type !== 'data' || ctx.yStarted) {
              return 0;
            }
            ctx.yStarted = true;
            return ctx.index * delayBetweenPoints;
          }
        }
      };

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
        animation
      };
    }
  }
}
