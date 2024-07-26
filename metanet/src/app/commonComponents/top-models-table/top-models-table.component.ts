import { Component, OnInit } from '@angular/core';
import {model} from "../../domain/models";
import {Table, TableModule} from "primeng/table";
import {PrimeTemplate} from "primeng/api";
import {Button} from "primeng/button";
import {CurrencyPipe} from "@angular/common";
import {RatingModule} from "primeng/rating";
import {FormsModule} from "@angular/forms";



@Component({
  selector: 'app-top-models-table',
  standalone: true,
  imports: [
    PrimeTemplate,
    Button,
    TableModule,
    CurrencyPipe,
    RatingModule,
    FormsModule
  ],
  templateUrl: './top-models-table.component.html',
  styleUrls: ['./top-models-table.component.css'],
})
export class TopModelsTableComponent implements OnInit {
  models!: model[];




    ngOnInit() {

      this.models = [
        {
          "id": 1000,
          "name": "Bamboo Watch",
          "image": "bamboo-watch.jpg",
          "category": "Accessories",
          "price": 65,
          "reviews": 5
        },
        {
          "id": 1001,
          "name": "Black Watch",
          "image": "black-watch.jpg",
          "category": "Accessories",
          "price": 72,
          "reviews": 4
        },
        {
          "id": 1002,
          "name": "Blue Band",
          "image": "blue-band.jpg",
          "category": "Fitness",
          "price": 79,
          "reviews": 3
        },
        {
          "id": 1003,
          "name": "Blue T-Shirt",
          "image": "blue-t-shirt.jpg",
          "category": "Clothing",
          "price": 29,
          "reviews": 5
        },
        {
          "id": 1004,
          "name": "Bracelet",
          "image": "bracelet.jpg",
          "category": "Accessories",
          "price": 15,
          "reviews": 4
        },
        {
          "id": 1005,
          "name": "Brown Purse",
          "image": "brown-purse.jpg",
          "category": "Accessories",
          "price": 120,
          "reviews": 4
        },
        {
          "id": 1006,
          "name": "Chakra Bracelet",
          "image": "chakra-bracelet.jpg",
          "category": "Accessories",
          "price": 32,
          "reviews": 3
        },
        {
          "id": 1007,
          "name": "Galaxy Earrings",
          "image": "galaxy-earrings.jpg",
          "category": "Accessories",
          "price": 34,
          "reviews": 5
        },
        {
          "id": 1008,
          "name": "Game Controller",
          "image": "game-controller.jpg",
          "category": "Electronics",
          "price": 99,
          "reviews": 4
        },
        {
          "id": 1009,
          "name": "Gaming Set",
          "image": "gaming-set.jpg",
          "category": "Electronics",
          "price": 299,
          "reviews": 3
        },
        {
          "id": 1010,
          "name": "Gold Phone Case",
          "image": "gold-phone-case.jpg",
          "category": "Accessories",
          "price": 24,
          "reviews": 4
        },
        {
          "id": 1011,
          "name": "Green Earbuds",
          "image": "green-earbuds.jpg",
          "category": "Electronics",
          "price": 89,
          "reviews": 4
        },
        {
          "id": 1012,
          "name": "Green T-Shirt",
          "image": "green-t-shirt.jpg",
          "category": "Clothing",
          "price": 49,
          "reviews": 5
        },
        {
          "id": 1013,
          "name": "Grey T-Shirt",
          "image": "grey-t-shirt.jpg",
          "category": "Clothing",
          "price": 48,
          "reviews": 3
        },
        {
          "id": 1014,
          "name": "Headphones",
          "image": "headphones.jpg",
          "category": "Electronics",
          "price": 175,
          "reviews": 5
        },
        {
          "id": 1015,
          "name": "Light Green T-Shirt",
          "image": "light-green-t-shirt.jpg",
          "category": "Clothing",
          "price": 49,
          "reviews": 4
        },
        {
          "id": 1016,
          "name": "Lime Band",
          "image": "lime-band.jpg",
          "category": "Fitness",
          "price": 79,
          "reviews": 3
        },
        {
          "id": 1017,
          "name": "Mini Speakers",
          "image": "mini-speakers.jpg",
          "category": "Electronics",
          "price": 85,
          "reviews": 4
        },
        {
          "id": 1018,
          "name": "Painted Phone Case",
          "image": "painted-phone-case.jpg",
          "category": "Accessories",
          "price": 56,
          "reviews": 5
        },
        {
          "id": 1019,
          "name": "Pink Band",
          "image": "pink-band.jpg",
          "category": "Fitness",
          "price": 79,
          "reviews": 4
        },
        {
          "id": 1020,
          "name": "Pink Purse",
          "image": "pink-purse.jpg",
          "category": "Accessories",
          "price": 110,
          "reviews": 4
        },
        {
          "id": 1021,
          "name": "Purple Band",
          "image": "purple-band.jpg",
          "category": "Fitness",
          "price": 79,
          "reviews": 3
        },
        {
          "id": 1022,
          "name": "Purple Gemstone Necklace",
          "image": "purple-gemstone-necklace.jpg",
          "category": "Accessories",
          "price": 45,
          "reviews": 4
        },
        {
          "id": 1023,
          "name": "Purple T-Shirt",
          "image": "purple-t-shirt.jpg",
          "category": "Clothing",
          "price": 49,
          "reviews": 5
        },
        {
          "id": 1024,
          "name": "Shoes",
          "image": "shoes.jpg",
          "category": "Clothing",
          "price": 64,
          "reviews": 4
        },
        {
          "id": 1025,
          "name": "Sneakers",
          "image": "sneakers.jpg",
          "category": "Clothing",
          "price": 78,
          "reviews": 4
        },
        {
          "id": 1026,
          "name": "Teal T-Shirt",
          "image": "teal-t-shirt.jpg",
          "category": "Clothing",
          "price": 49,
          "reviews": 3
        },
        {
          "id": 1027,
          "name": "Yellow Earbuds",
          "image": "yellow-earbuds.jpg",
          "category": "Electronics",
          "price": 89,
          "reviews": 3
        },
        {
          "id": 1028,
          "name": "Yoga Mat",
          "image": "yoga-mat.jpg",
          "category": "Fitness",
          "price": 20,
          "reviews": 5
        },
        {
          "id": 1029,
          "name": "Yoga Set",
          "image": "yoga-set.jpg",
          "category": "Fitness",
          "price": 20,
          "reviews": 4
        }
      ];


    }

    clear(table: Table) {
        table.clear();
    }


}
