import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [ChartModule, BadgeModule],
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










      this.options = {
        maintainAspectRatio: false,
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
        }
      };
    }
  }
}
