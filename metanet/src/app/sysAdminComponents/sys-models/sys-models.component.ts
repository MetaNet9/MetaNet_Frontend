import { Component } from '@angular/core';
import {AdminSidebarComponent} from "../../commonComponents/admin-sidebar/admin-sidebar.component";
import {AdminnavbarComponent} from "../../commonComponents/adminnavbar/adminnavbar.component";
import {DialogModule} from "primeng/dialog";
import {ModelsByUserTableComponent} from "../../commonComponents/models-by-user-table/models-by-user-table.component";
import {PrimeTemplate} from "primeng/api";

@Component({
  selector: 'app-sys-models',
  standalone: true,
    imports: [
        AdminSidebarComponent,
        AdminnavbarComponent,
        DialogModule,
        ModelsByUserTableComponent,
        PrimeTemplate
    ],
  templateUrl: './sys-models.component.html',
  styleUrl: './sys-models.component.css'
})
export class SysModelsComponent {
  vix: boolean = false;
  selectedProduct: any = null;
  onRowSelect(selectedProduct: any) {
    this.selectedProduct = selectedProduct;
    this.vix = true;
  }
}
