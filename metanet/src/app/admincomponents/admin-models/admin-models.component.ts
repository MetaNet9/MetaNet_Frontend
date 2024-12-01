import { Component } from '@angular/core';
import {AdminSidebarComponent} from "../../commonComponents/admin-sidebar/admin-sidebar.component";
import {AdminnavbarComponent} from "../../commonComponents/adminnavbar/adminnavbar.component";
import {TableAdmin4ColoumComponent} from "../../commonComponents/table-admin-4-coloum/table-admin-4-coloum.component";
import {ModelsByUserTableComponent} from "../../commonComponents/models-by-user-table/models-by-user-table.component";
import {DialogModule} from "primeng/dialog";
import {PrimeTemplate} from "primeng/api";
import {Statistics} from "../../domain/models";
import {BASE_url} from "../../app.config";
import {HttpClient} from "@angular/common/http";

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
  statistics!:Statistics;

  constructor(private http: HttpClient) {
    this.statisticsGet()
  }
  onRowSelect(selectedProduct: any) {
    this.selectedProduct = selectedProduct;
    this.vix = true;
  }
  private statisticsGet(){
    this.http.get<Statistics>(BASE_url+"/statistics", { withCredentials: true })
      .subscribe({
        next: (response) => {
          this.statistics = response;
          console.log(this.statistics)

        },
        error: (error:{error?:{massage?:string}}) => {
          console.error('There was an error!', error.error?.massage);
        }
      });
  }

}
