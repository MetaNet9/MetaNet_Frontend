import { Component, model } from '@angular/core';
import { UserNavbarComponent } from "../user-navbar/user-navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { CommonModule } from '@angular/common';


interface CollectionPageEvent{
  first?: number;
  rows?: number;
  page?: number;
  pageCount?: number;
}

interface Collection{
  image: string;
  name: string;
  icon: string;
  modelcount?: number;
}



@Component({
  selector: 'app-marketplace-categories',
  standalone: true,
  imports: [
      UserNavbarComponent,
      FooterComponent,
      ButtonModule,
      PaginatorModule,
      CommonModule
    ],
  templateUrl: './marketplace-categories.component.html',
  styleUrl: './marketplace-categories.component.css'
})
export class MarketplaceCategoriesComponent {

  first: number = 0;
  rows: number = 15;
  collections: Collection[] = [
    { image: 'https://media.sketchfab.com/models/dda567d1ffbd40eabbce7625a48a39ef/thumbnails/84f3614735f048b5838b45f5eb5aa430/01ec6878522a49bc956f9ba4b9fe08f8.jpeg', name: 'Elephant', icon: 'pi pi-image', modelcount: 2 },
    { image: 'https://media.sketchfab.com/models/73bf025d4a51401caa36c3e5950b4e65/thumbnails/81416d40064344ffb054042ae09194a9/822364e76c7642579e5831a8744016b5.jpeg', name: 'Tiger', icon: 'pi pi-image' , modelcount: 2},
    { image: 'https://media.sketchfab.com/models/5e89e6689c134d54860e38eb35761ffe/thumbnails/d71ad53ff8dd48f084b667f77b90847c/56b5db8e8e7b46f1b41b9dc6355d06e9.jpeg', name: 'Home', icon: 'pi pi-image', modelcount: 2  },
    { image: 'https://media.sketchfab.com/models/dda567d1ffbd40eabbce7625a48a39ef/thumbnails/84f3614735f048b5838b45f5eb5aa430/01ec6878522a49bc956f9ba4b9fe08f8.jpeg', name: 'Elephant', icon: 'pi pi-image', modelcount: 2  },
    { image: 'https://media.sketchfab.com/models/73bf025d4a51401caa36c3e5950b4e65/thumbnails/81416d40064344ffb054042ae09194a9/822364e76c7642579e5831a8744016b5.jpeg', name: 'Tiger', icon: 'pi pi-image', modelcount: 2  },
    { image: 'https://media.sketchfab.com/models/5e89e6689c134d54860e38eb35761ffe/thumbnails/d71ad53ff8dd48f084b667f77b90847c/56b5db8e8e7b46f1b41b9dc6355d06e9.jpeg', name: 'Home', icon: 'pi pi-image' , modelcount: 2 },
    { image: 'https://media.sketchfab.com/models/dda567d1ffbd40eabbce7625a48a39ef/thumbnails/84f3614735f048b5838b45f5eb5aa430/01ec6878522a49bc956f9ba4b9fe08f8.jpeg', name: 'Elephant', icon: 'pi pi-image', modelcount: 2 },
    { image: 'https://media.sketchfab.com/models/73bf025d4a51401caa36c3e5950b4e65/thumbnails/81416d40064344ffb054042ae09194a9/822364e76c7642579e5831a8744016b5.jpeg', name: 'Tiger', icon: 'pi pi-image' , modelcount: 2},
    { image: 'https://media.sketchfab.com/models/5e89e6689c134d54860e38eb35761ffe/thumbnails/d71ad53ff8dd48f084b667f77b90847c/56b5db8e8e7b46f1b41b9dc6355d06e9.jpeg', name: 'Home', icon: 'pi pi-image', modelcount: 2  },
    { image: 'https://media.sketchfab.com/models/dda567d1ffbd40eabbce7625a48a39ef/thumbnails/84f3614735f048b5838b45f5eb5aa430/01ec6878522a49bc956f9ba4b9fe08f8.jpeg', name: 'Elephant', icon: 'pi pi-image', modelcount: 2  },
    { image: 'https://media.sketchfab.com/models/73bf025d4a51401caa36c3e5950b4e65/thumbnails/81416d40064344ffb054042ae09194a9/822364e76c7642579e5831a8744016b5.jpeg', name: 'Tiger', icon: 'pi pi-image', modelcount: 2  },
    { image: 'https://media.sketchfab.com/models/5e89e6689c134d54860e38eb35761ffe/thumbnails/d71ad53ff8dd48f084b667f77b90847c/56b5db8e8e7b46f1b41b9dc6355d06e9.jpeg', name: 'Home', icon: 'pi pi-image' , modelcount: 2 },
  ];
  paginatedCollections: Collection[] = [];
  totalCollectionRecords: number = this.collections.length;

  ngOnInit() {
    this.updatePaginatedCollections();
  }


 // collections pagination
 onCollectionPageChange(event: CollectionPageEvent) {
  this.first = event.first || 0;
  this.rows = event.rows || 15;
  this.updatePaginatedCollections();
}

updatePaginatedCollections() {
  this.paginatedCollections = this.collections.slice(this.first, this.first + this.rows);
}

}
