import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-sales-by-category-pie-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './sales-by-category-pie-chart.component.html',
  styleUrl: './sales-by-category-pie-chart.component.css'
})
export class SalesByCategoryPieChartComponent implements OnInit {
  data: any;
  options: any;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');

      this.data = {
        labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'],
        datasets: [
          {
            data: [540, 325, 702, 421, 300, 500, 200, 100, 150, 250, 300, 400, 500, 600, 700, 800],
            backgroundColor: [
              'rgb(65,12,76)', 'rgb(75,12,101)', 'rgb(88,15,118)', 'rgb(100,18,135)', 'rgb(110,21,150)',
              'rgb(120,24,165)', 'rgb(130,27,180)', 'rgb(140,30,195)', 'rgb(150,33,210)', 'rgb(160,36,225)',
              'rgb(170,39,240)', 'rgb(180,42,255)', 'rgb(190,45,270)', 'rgb(200,48,285)', 'rgb(210,51,300)',
              'rgb(220,54,315)'
            ]
          }
        ]
      };

      this.options = {
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              usePointStyle: true,
              color: textColor
            }
          }
        }
      };
    }
  }
}
