import {Component, OnInit} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { AdminnavbarComponent } from 'src/app/commonComponents/adminnavbar/adminnavbar.component';
import { WeeklyRevenueChartComponent } from "../../commonComponents/weekly-revenue-chart/weekly-revenue-chart.component";
import { SalesByCategoryPieChartComponent } from "../../commonComponents/sales-by-category-pie-chart/sales-by-category-pie-chart.component";
import {AdminSidebarComponent} from "../../commonComponents/admin-sidebar/admin-sidebar.component";
import {RevenueStats} from "../../domain/models";
import {HttpClient} from "@angular/common/http";
import {BASE_url} from "../../app.config";

@Component({
  selector: 'app-admin-revenue',
  standalone: true,
  imports: [
    AdminnavbarComponent,
    CalendarModule,
    FormsModule,
    WeeklyRevenueChartComponent,
    SalesByCategoryPieChartComponent,
    AdminSidebarComponent,
    ReactiveFormsModule
  ],
  templateUrl: './admin-revenue.component.html',
  styleUrl: './admin-revenue.component.css'
})
export class AdminRevenueComponent implements OnInit {
  date1!: Date ;
  //
  // date2: Date | undefined;
  carddata!:RevenueStats
  startDate =new FormControl()
  endDate =new FormControl()

  constructor(private http: HttpClient) {
  }


  ngOnInit() {
    // this.getCards()
    this.endDate.setValue(new Date());
    this.date1=new Date();
    this.date1.setMonth(this.date1.getMonth()-1)
    this.startDate.setValue(this.date1)
    console.log(this.startDate.value,this.endDate.value)

    this.endDate.valueChanges.subscribe((value)=>{
      // console.log(value)
      this.getCards(this.startDate.value,value)
    })

    this.getCards(this.startDate.value,this.endDate.value)


  }

  getCards(start:Date,end:Date){
    let params = {startDate:start.getFullYear()+"-"+(start.getMonth()+1)+"-"+(start.getDate()),endDate:end.getFullYear()+"-"+(end.getMonth()+1)+"-"+(end.getDate())}
    this.http.get<RevenueStats>(BASE_url+"/statistics/revenue", { params:params,withCredentials: true })
      .subscribe({
        next: (response) => {
          this.carddata = response;
          console.log(this.carddata)

        },
        error: (error:{error?:{massage?:string}}) => {
          console.error('There was an error!', error.error?.massage);
        }
      });
  }




}
