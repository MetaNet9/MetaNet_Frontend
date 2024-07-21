import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { AdminnavbarComponent } from 'src/app/commonComponents/adminnavbar/adminnavbar.component';

@Component({
  selector: 'app-admin-transactions',
  standalone: true,
  imports: [
    AdminnavbarComponent,
    CalendarModule, FormsModule
  ],
  templateUrl: './admin-transactions.component.html',
  styleUrl: './admin-transactions.component.css'
})
export class AdminTransactionsComponent {
  date1: Date | undefined;

  date2: Date | undefined;
}
