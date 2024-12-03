import {Component, ViewChild} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { AdminnavbarComponent } from 'src/app/commonComponents/adminnavbar/adminnavbar.component';
import {AdminSidebarComponent} from "../../commonComponents/admin-sidebar/admin-sidebar.component";
import {TableAdmin4ColoumComponent} from "../../commonComponents/table-admin-4-coloum/table-admin-4-coloum.component";
import {AngularToastifyModule, ToastService} from "angular-toastify";

@Component({
  selector: 'app-admin-transactions',
  standalone: true,
  imports: [
    AdminnavbarComponent,
    CalendarModule, FormsModule, AdminSidebarComponent, TableAdmin4ColoumComponent, AngularToastifyModule
  ],
  templateUrl: './admin-transactions.component.html',
  styleUrl: './admin-transactions.component.css'
})
export class AdminTransactionsComponent {
  date1: Date | undefined;

  date2: Date | undefined;

  startdate: string = '';
  enddate: string = '';

  @ViewChild(TableAdmin4ColoumComponent) transactionsComponent!: TableAdmin4ColoumComponent;
  constructor(private _toastService: ToastService ) {
  }

  filter() {

    if (this.date1 && this.date2 ) {
      if (this.date1 > this.date2) {
        this._toastService.error('Start date should be less than end date');
      }else {
        console.log(this.date1, this.date2);
        this.startdate = this.date1.getFullYear()+ '-' + (this.date1.getMonth() + 1) + '-' + this.date1.getDate();
        this.enddate = this.date2.getFullYear()+ '-' + (this.date2.getMonth() + 1) + '-' + this.date2.getDate();
        console.log(this.startdate, this.enddate);

        this.transactionsComponent.fetchTransactions(this.startdate, this.enddate);
      }
    }else {
      this.transactionsComponent.fetchTransactions();
    }

  }
}
