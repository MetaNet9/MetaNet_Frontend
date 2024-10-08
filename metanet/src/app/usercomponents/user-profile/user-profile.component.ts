import { Component } from '@angular/core';
import { UserNavbarComponent } from "../user-navbar/user-navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { UserProfileHeaderComponent } from "../user-profile-header/user-profile-header.component";
import { PaginatorModule } from 'primeng/paginator';
import { CommonModule } from '@angular/common';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpEventType } from '@angular/common/http';
import { DialogModule } from 'primeng/dialog';
import { MessageService } from 'primeng/api';
import { FileUploadModule, FileUploadEvent } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';




interface ModelPageEvent {
  first?: number;
  rows?: number;
  page?: number;
  pageCount?: number;
}

interface CollectionPageEvent{
  first?: number;
  rows?: number;
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
    CommonModule,
    ReactiveFormsModule,
    DialogModule,
    FileUploadModule,
    ToastModule,
    HttpClientModule

  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
  providers: [MessageService]
})
export class UserProfileComponent {

  visibleUpload: boolean = false;

  uploadedFiles: any[] = [];


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
  collectionRow: number = 10;
  collections: Collection[] = [
    { image: 'https://media.sketchfab.com/models/dda567d1ffbd40eabbce7625a48a39ef/thumbnails/84f3614735f048b5838b45f5eb5aa430/01ec6878522a49bc956f9ba4b9fe08f8.jpeg', name: 'Elephant', icon: 'pi-image', modelcount: 2 },
    { image: 'https://media.sketchfab.com/models/73bf025d4a51401caa36c3e5950b4e65/thumbnails/81416d40064344ffb054042ae09194a9/822364e76c7642579e5831a8744016b5.jpeg', name: 'Tiger', icon: 'pi-image' , modelcount: 2},
    { image: 'https://media.sketchfab.com/models/5e89e6689c134d54860e38eb35761ffe/thumbnails/d71ad53ff8dd48f084b667f77b90847c/56b5db8e8e7b46f1b41b9dc6355d06e9.jpeg', name: 'Home', icon: 'pi-image', modelcount: 2  },
    { image: 'https://media.sketchfab.com/models/dda567d1ffbd40eabbce7625a48a39ef/thumbnails/84f3614735f048b5838b45f5eb5aa430/01ec6878522a49bc956f9ba4b9fe08f8.jpeg', name: 'Elephant', icon: 'pi-image', modelcount: 2  },
    { image: 'https://media.sketchfab.com/models/73bf025d4a51401caa36c3e5950b4e65/thumbnails/81416d40064344ffb054042ae09194a9/822364e76c7642579e5831a8744016b5.jpeg', name: 'Tiger', icon: 'pi-image', modelcount: 2  },
    { image: 'https://media.sketchfab.com/models/5e89e6689c134d54860e38eb35761ffe/thumbnails/d71ad53ff8dd48f084b667f77b90847c/56b5db8e8e7b46f1b41b9dc6355d06e9.jpeg', name: 'Home', icon: 'pi-image' , modelcount: 2 },
    { image: 'https://media.sketchfab.com/models/dda567d1ffbd40eabbce7625a48a39ef/thumbnails/84f3614735f048b5838b45f5eb5aa430/01ec6878522a49bc956f9ba4b9fe08f8.jpeg', name: 'Elephant', icon: 'pi-image', modelcount: 2 },
    { image: 'https://media.sketchfab.com/models/73bf025d4a51401caa36c3e5950b4e65/thumbnails/81416d40064344ffb054042ae09194a9/822364e76c7642579e5831a8744016b5.jpeg', name: 'Tiger', icon: 'pi-image' , modelcount: 2},
    { image: 'https://media.sketchfab.com/models/5e89e6689c134d54860e38eb35761ffe/thumbnails/d71ad53ff8dd48f084b667f77b90847c/56b5db8e8e7b46f1b41b9dc6355d06e9.jpeg', name: 'Home', icon: 'pi-image', modelcount: 2  },
    { image: 'https://media.sketchfab.com/models/dda567d1ffbd40eabbce7625a48a39ef/thumbnails/84f3614735f048b5838b45f5eb5aa430/01ec6878522a49bc956f9ba4b9fe08f8.jpeg', name: 'Elephant', icon: 'pi-image', modelcount: 2  },
    { image: 'https://media.sketchfab.com/models/73bf025d4a51401caa36c3e5950b4e65/thumbnails/81416d40064344ffb054042ae09194a9/822364e76c7642579e5831a8744016b5.jpeg', name: 'Tiger', icon: 'pi-image', modelcount: 2  },
    { image: 'https://media.sketchfab.com/models/5e89e6689c134d54860e38eb35761ffe/thumbnails/d71ad53ff8dd48f084b667f77b90847c/56b5db8e8e7b46f1b41b9dc6355d06e9.jpeg', name: 'Home', icon: 'pi-image' , modelcount: 2 },
    // Add more collections here
  ];
  paginatedCollections: Collection[] = [];
  totalCollectionRecords: number = this.collections.length;


  constructor(private messageService: MessageService) {}


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
    this.collectionFirst = event.first || 0;
    this.collectionRow = event.rows || 10;
    this.updatePaginatedCollections();
  }

  updatePaginatedCollections() {
    this.paginatedCollections = this.collections.slice(this.collectionFirst, this.collectionFirst + this.collectionRow);
  }







  showUpload() {
    this.visibleUpload = true;
  }

  onUpload(event:FileUploadEvent) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }

}
