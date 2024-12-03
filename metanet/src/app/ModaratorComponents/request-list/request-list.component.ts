import { Component } from '@angular/core';
import {AdminnavbarComponent} from "../../commonComponents/adminnavbar/adminnavbar.component";
import {ModeratorSidebarComponent} from "../../commonComponents/moderator-sidebar/moderator-sidebar.component";
import {ModReviewTableComponent} from "../../commonComponents/mod-review-table/mod-review-table.component";

@Component({
  selector: 'app-request-list',
  standalone: true,
  imports: [
    AdminnavbarComponent,
    ModeratorSidebarComponent,
    ModReviewTableComponent
  ],
  templateUrl: './request-list.component.html',
  styleUrl: './request-list.component.css'
})
export class RequestListComponent {

}
