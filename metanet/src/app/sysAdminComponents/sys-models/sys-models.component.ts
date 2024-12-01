import {Component, OnInit} from '@angular/core';
import {AdminSidebarComponent} from "../../commonComponents/admin-sidebar/admin-sidebar.component";
import {AdminnavbarComponent} from "../../commonComponents/adminnavbar/adminnavbar.component";
import {DialogModule} from "primeng/dialog";
import {ModelsByUserTableComponent} from "../../commonComponents/models-by-user-table/models-by-user-table.component";
import {PrimeTemplate} from "primeng/api";
import {SysadminSidebarComponent} from "../../commonComponents/sysadmin-sidebar/sysadmin-sidebar.component";
import {Statistics} from "../../domain/models";
import {HttpClient} from "@angular/common/http";
import {BASE_url} from "../../app.config";

@Component({
  selector: 'app-sys-models',
  standalone: true,
    imports: [
        AdminSidebarComponent,
        AdminnavbarComponent,
        DialogModule,
        ModelsByUserTableComponent,
        PrimeTemplate,
        SysadminSidebarComponent
    ],
  templateUrl: './sys-models.component.html',
  styleUrl: './sys-models.component.css'
})
export class SysModelsComponent implements OnInit {
  vix: boolean = false;
  selectedProduct: any = null;
  statistics!:Statistics;

  ngOnInit(): void {
    this.statisticsGet()
  }
  constructor( private http: HttpClient) {}
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
  onRowSelect(selectedProduct: any) {
    this.selectedProduct = selectedProduct;
    this.vix = true;
  }
}
