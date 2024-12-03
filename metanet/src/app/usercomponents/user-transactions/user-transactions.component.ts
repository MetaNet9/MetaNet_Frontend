import { Component } from '@angular/core';
import { UserNavbarComponent } from '../user-navbar/user-navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { UserProfileHeaderComponent } from '../user-profile-header/user-profile-header.component';
import { PaginatorModule } from 'primeng/paginator';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { WeeklyRevenueChartComponent } from "../../commonComponents/weekly-revenue-chart/weekly-revenue-chart.component";
import { SalesByCategoryPieChartComponent } from "../../commonComponents/sales-by-category-pie-chart/sales-by-category-pie-chart.component";
import { HttpClient } from '@angular/common/http';

interface PageEvent {
  first?: number;
  rows?: number;
  page?: number;
  pageCount?: number;
}

interface Model {
  image: string;
  name: string;
  price: string;
}

interface Withdrawal {
  date: string;
  amount: string;
  status: string;
}

interface WithdrawalDetails {
  balance: number;
  pendingWithdrawals: number;
  totalWithdrawals: number;
  pastWithdrawals: {
    id: number;
    amount: number;
    status: string;
    stripeTransactionId: string | null;
    createdAt: string;
    updatedAt: string;
  }[];
}

@Component({
  selector: 'app-user-transactions',
  standalone: true,
  imports: [
    CommonModule,
    UserNavbarComponent,
    FooterComponent,
    TabViewModule,
    ButtonModule,
    UserProfileHeaderComponent,
    PaginatorModule,
    ChartModule,
    WeeklyRevenueChartComponent,
    SalesByCategoryPieChartComponent
],
  templateUrl: './user-transactions.component.html',
  styleUrls: ['./user-transactions.component.css'],
})
export class UserTransactionsComponent {
  first: number = 0;
  rows: number = 4;

  //for the withdrawels page
  balance: number = 0;
  pendingWithdrawals: number = 0;
  totalWithdrawals: number = 0;
  pastWithdrawals: any[] = [];
  withdrawalAmount: number = 20;

  models: Model[] = [
    {
      image:
        'https://media.sketchfab.com/models/dda567d1ffbd40eabbce7625a48a39ef/thumbnails/84f3614735f048b5838b45f5eb5aa430/01ec6878522a49bc956f9ba4b9fe08f8.jpeg',
      name: 'Elephant',
      price: '$2.99',
    },
    
  ];
  paginatedModels: Model[] = [];
  totalModelRecords: number = this.models.length;

  totalmodeldata: any;
  options: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.updatePaginatedModels();
    this.fetchWithdrawalDetails();

    // Chart data and options
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const documentStyle = getComputedStyle(document.documentElement);
      // const textColor = documentStyle.getPropertyValue('--text-color');
      // const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      // const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

      this.totalmodeldata = {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ],
        datasets: [
          {
            // label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 100],
            fill: false,
            borderColor: documentStyle.getPropertyValue('--pink-500'),
            tension: 0.5,
            pointRadius: 0,
            pointHoverRadius: 0,
          },
        ],
      };

      const totalDuration = 1000;
      const delayBetweenPoints =
        totalDuration / this.totalmodeldata.datasets[0].data.length;
      const previousY = (ctx: {
        index: number;
        chart: {
          scales: { y: { getPixelForValue: (arg0: number) => any } };
          getDatasetMeta: (arg0: any) => {
            (): any;
            new (): any;
            data: {
              getProps: (
                arg0: string[],
                arg1: boolean
              ) => { (): any; new (): any; y: any };
            }[];
          };
        };
        datasetIndex: any;
      }) =>
        ctx.index === 0
          ? ctx.chart.scales.y.getPixelForValue(100)
          : ctx.chart
              .getDatasetMeta(ctx.datasetIndex)
              .data[ctx.index - 1].getProps(['y'], true).y;
      const animation = {
        x: {
          type: 'number',
          easing: 'linear',
          duration: delayBetweenPoints,
          from: NaN, // the point is initially skipped
          delay(ctx: { type: string; xStarted: boolean; index: number }) {
            if (ctx.type !== 'data' || ctx.xStarted) {
              return 0;
            }
            ctx.xStarted = true;
            return ctx.index * delayBetweenPoints;
          },
        },
        y: {
          type: 'number',
          easing: 'linear',
          duration: delayBetweenPoints,
          from: previousY,
          delay(ctx: { type: string; yStarted: boolean; index: number }) {
            if (ctx.type !== 'data' || ctx.yStarted) {
              return 0;
            }
            ctx.yStarted = true;
            return ctx.index * delayBetweenPoints;
          },
        },
      };

      this.options = {
        maintainAspectRatio: true,
        aspectRatio: 0.6,
        plugins: {
          legend: {
            labels: {
              // color: textColor
              display: false,
            },
            display: false,
          },
        },
        scales: {
          x: {
            ticks: {
              // color: textColorSecondary
              display: false,
            },
            grid: {
              // color: surfaceBorder,
              // drawBorder: false,
              display: false,
            },
            display: false,
          },
          y: {
            ticks: {
              // color: textColorSecondary
              display: false,
            },
            grid: {
              // color: surfaceBorder,
              // drawBorder: false
              display: false,
            },
            display: false,
          },
        },
        animation,
      };
    }
  }

  onModelPageChange(event: PageEvent) {
    this.first = event.first || 0;
    this.rows = event.rows || 4;
    this.updatePaginatedModels();
  }

  updatePaginatedModels() {
    this.paginatedModels = this.models.slice(
      this.first,
      this.first + this.rows
    );
  }

  fetchWithdrawalDetails() {
    this.http
      .get<WithdrawalDetails>('http://localhost:3000/transactions/withdrawal-details', {
        withCredentials: true // Include credentials such as cookies
      })
      .subscribe(
        (response) => {
          // Bind data to properties
          this.balance = response.balance;
          this.pendingWithdrawals = response.pendingWithdrawals;
          this.totalWithdrawals = response.totalWithdrawals;
          this.pastWithdrawals = response.pastWithdrawals;
        },
        (error) => {
          console.error('Error fetching withdrawal details:', error);
        }
      );
  }
  
  validateAmount() {
    if (this.withdrawalAmount < 21) {
      console.log('Withdrawal amount must be at least 21.');
    }
  }

  // Handle withdrawal request
  makeWithdrawal() {
    if (this.withdrawalAmount >= 21 && this.withdrawalAmount <= this.balance) {
      this.http
        .post(
          'http://localhost:3000/transactions/withdraw',
          { amount: this.withdrawalAmount },
          { withCredentials: true }
        )
        .subscribe(
          (response: any) => {
            console.log('Withdrawal successful:', response);
            this.fetchWithdrawalDetails(); // Refresh withdrawal details
          },
          (error) => {
            console.error('Error making withdrawal:', error);
          }
        );
    } else {
      console.error('Invalid withdrawal amount.');
    }
  }
}


