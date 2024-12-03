import {Component, OnInit} from '@angular/core';
import { UserNavbarComponent } from '../user-navbar/user-navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import {HttpClient} from "@angular/common/http";
import {BASE_url} from "../../app.config";

@Component({
  selector: 'app-marketplace-shoppingcart',
  standalone: true,
  imports: [UserNavbarComponent, FooterComponent,FormsModule, InputNumberModule],
  templateUrl: './marketplace-shoppingcart.component.html',
  styleUrl: './marketplace-shoppingcart.component.css'
})
export class MarketplaceShoppingcartComponent implements OnInit{
  value1: number = 50;
  cartItems = []
  constructor(private http:HttpClient) {}
  ngOnInit() {
    this.http.get(BASE_url+'/cart',{withCredentials:true}).subscribe( {
      next: (data: any) => {
        this.cartItems = data;
      },
      error: (error: any) => {
        console.log(error)
      }
    })
  }


}
