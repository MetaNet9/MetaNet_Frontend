import { Component } from '@angular/core';
import {AdminSidebarComponent} from "../../commonComponents/admin-sidebar/admin-sidebar.component";
import {AdminnavbarComponent} from "../../commonComponents/adminnavbar/adminnavbar.component";
import {TableAdmin4ColoumComponent} from "../../commonComponents/table-admin-4-coloum/table-admin-4-coloum.component";
import {ModelsByUserTableComponent} from "../../commonComponents/models-by-user-table/models-by-user-table.component";
import {DialogModule} from "primeng/dialog";
import {PrimeTemplate} from "primeng/api";

@Component({
  selector: 'app-admin-models',
  standalone: true,
  imports: [
    AdminSidebarComponent,
    AdminnavbarComponent,
    TableAdmin4ColoumComponent,
    ModelsByUserTableComponent,
    DialogModule,
    PrimeTemplate
  ],
  templateUrl: './admin-models.component.html',
  styleUrl: './admin-models.component.css'
})
export class AdminModelsComponent {
  vix: boolean = false;
  selectedProduct: any = null;
  onRowSelect(selectedProduct: any) {
    this.selectedProduct = selectedProduct;
    this.vix = true;
  }

}
