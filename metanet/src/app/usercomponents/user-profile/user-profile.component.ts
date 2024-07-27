import { Component } from '@angular/core';
import { UserNavbarComponent } from "../user-navbar/user-navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { UserProfileHeaderComponent } from "../user-profile-header/user-profile-header.component";
import { PaginatorModule } from 'primeng/paginator';
import { CommonModule } from '@angular/common';



interface ModelPageEvent {
  first?: number;
  rows?: number;
  page?: number;
  pageCount?: number;
}

interface CollectionPageEvent{
  collectionFirst?: number;
  collectionRow?: number;
  page?: number;
  pageCount?: number;
}

interface Model {
  image: string;
  name: string;
  price: string;
}

interface Collection{
  image: string;
  name: string;
  icon: string;
  modelcount?: number;
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    UserNavbarComponent,
    FooterComponent,
    TabViewModule,
    ButtonModule,
    UserProfileHeaderComponent,
    PaginatorModule,
    CommonModule
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  first: number = 0;
  rows: number = 4;
  models: Model[] = [
    { image: 'https://media.sketchfab.com/models/dda567d1ffbd40eabbce7625a48a39ef/thumbnails/84f3614735f048b5838b45f5eb5aa430/01ec6878522a49bc956f9ba4b9fe08f8.jpeg', name: 'Elephant', price: '$2.99' ,},
    { image: 'https://media.sketchfab.com/models/73bf025d4a51401caa36c3e5950b4e65/thumbnails/81416d40064344ffb054042ae09194a9/822364e76c7642579e5831a8744016b5.jpeg', name: 'Tiger', price: '$3.99' },
    { image: 'https://media.sketchfab.com/models/5e89e6689c134d54860e38eb35761ffe/thumbnails/d71ad53ff8dd48f084b667f77b90847c/56b5db8e8e7b46f1b41b9dc6355d06e9.jpeg', name: 'Home', price: '$4.99' },
    { image: 'https://media.sketchfab.com/models/dda567d1ffbd40eabbce7625a48a39ef/thumbnails/84f3614735f048b5838b45f5eb5aa430/01ec6878522a49bc956f9ba4b9fe08f8.jpeg', name: 'Elephant', price: '$2.99' ,},
    { image: 'https://media.sketchfab.com/models/73bf025d4a51401caa36c3e5950b4e65/thumbnails/81416d40064344ffb054042ae09194a9/822364e76c7642579e5831a8744016b5.jpeg', name: 'Tiger', price: '$3.99' },
    { image: 'https://media.sketchfab.com/models/5e89e6689c134d54860e38eb35761ffe/thumbnails/d71ad53ff8dd48f084b667f77b90847c/56b5db8e8e7b46f1b41b9dc6355d06e9.jpeg', name: 'Home', price: '$4.99' },
    // Add more models here
  ];
  paginatedModels: Model[] = [];
  totalModelRecords: number = this.models.length;


  collectionFirst: number = 0;
  collectionRow: number = 5;
  collections: Collection[] = [
    { image: 'https://media.sketchfab.com/models/dda567d1ffbd40eabbce7625a48a39ef/thumbnails/84f3614735f048b5838b45f5eb5aa430/01ec6878522a49bc956f9ba4b9fe08f8.jpeg', name: 'Elephant', icon: 'pi pi-image', modelcount: 2 },
    { image: 'https://media.sketchfab.com/models/73bf025d4a51401caa36c3e5950b4e65/thumbnails/81416d40064344ffb054042ae09194a9/822364e76c7642579e5831a8744016b5.jpeg', name: 'Tiger', icon: 'pi pi-image' , modelcount: 2},
    { image: 'https://media.sketchfab.com/models/5e89e6689c134d54860e38eb35761ffe/thumbnails/d71ad53ff8dd48f084b667f77b90847c/56b5db8e8e7b46f1b41b9dc6355d06e9.jpeg', name: 'Home', icon: 'pi pi-image', modelcount: 2  },
    { image: 'https://media.sketchfab.com/models/dda567d1ffbd40eabbce7625a48a39ef/thumbnails/84f3614735f048b5838b45f5eb5aa430/01ec6878522a49bc956f9ba4b9fe08f8.jpeg', name: 'Elephant', icon: 'pi pi-image', modelcount: 2  },
    { image: 'https://media.sketchfab.com/models/73bf025d4a51401caa36c3e5950b4e65/thumbnails/81416d40064344ffb054042ae09194a9/822364e76c7642579e5831a8744016b5.jpeg', name: 'Tiger', icon: 'pi pi-image', modelcount: 2  },
    { image: 'https://media.sketchfab.com/models/5e89e6689c134d54860e38eb35761ffe/thumbnails/d71ad53ff8dd48f084b667f77b90847c/56b5db8e8e7b46f1b41b9dc6355d06e9.jpeg', name: 'Home', icon: 'pi pi-image' },
    // Add more collections here
  ];
  paginatedCollections: Collection[] = [];
  totalCollectionRecords: number = this.collections.length;

  ngOnInit() {
    this.updatePaginatedModels();
    this.updatePaginatedCollections();
  }

  // Model Pagination
  onModelPageChange(event: ModelPageEvent) {
    this.first = event.first || 0;
    this.rows = event.rows || 4;
    this.updatePaginatedModels();
  }

  updatePaginatedModels() {
    this.paginatedModels = this.models.slice(this.first, this.first + this.rows);
  }

// collections pagination
  onCollectionPageChange(event: CollectionPageEvent) {
    this.first = event.collectionFirst || 0;
    this.rows = event.collectionRow || 5;
    this.updatePaginatedCollections();
  }

  updatePaginatedCollections() {
    this.paginatedCollections = this.collections.slice(this.collectionFirst, this.collectionFirst + this.collectionRow);
  }
}
