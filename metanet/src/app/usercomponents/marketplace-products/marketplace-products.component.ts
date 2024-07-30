import { Component, OnInit } from '@angular/core';
import { UserNavbarComponent } from '../user-navbar/user-navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { PaginatorModule } from 'primeng/paginator';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ModelPageEvent {
  first?: number;
  rows?: number;
  page?: number;
  pageCount?: number;
}

interface Model {
  image: string;
  name: string;
  price: string;
  discount: number;
  category: string;
  format: string;
  polyCount: string;
  license: string;
  rating: number;
  pbr: boolean;
  animated: boolean;
  rigged: boolean;
}

@Component({
  selector: 'app-marketplace-products',
  standalone: true,
  imports: [
    UserNavbarComponent,
    FooterComponent,
    PaginatorModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './marketplace-products.component.html',
  styleUrl: './marketplace-products.component.css',
})
export class MarketplaceProductsComponent implements OnInit {
  first: number = 0;
  rows: number = 12;
  searchQuery: string = '';
  selectedCategory: string = 'Any';
  selectedPrice: number = 500;
  selectedFormat: string = 'Any';
  selectedPolyCount: string = 'Any';
  selectedLicense: string = 'Any';
  selectedRating: string = 'Any';
  selectedPBR: boolean = false;
  selectedAnimated: boolean = false;
  selectedRigged: boolean = false;
  selectedSort: string = 'Relevance';

  categories: string[] = ['Any','Animals & Pets', 'Architecture', 'Art', 'Vehicles'];
  formats: string[] = ['Any', 'FBX', 'OBJ', 'GLTF'];
  polyCounts: string[] = ['Any', 'Low', 'Medium', 'High'];
  licenses: string[] = ['Any', 'Royalty Free', 'Editorial', 'Free'];
  ratings: string[] = ['Any', '1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'];
  sortOptions: string[] = ['Relevance', 'Price: Low to High', 'Price: High to Low'];

  models: Model[] = [
    {
      image: 'https://media.sketchfab.com/models/dda567d1ffbd40eabbce7625a48a39ef/thumbnails/84f3614735f048b5838b45f5eb5aa430/01ec6878522a49bc956f9ba4b9fe08f8.jpeg',
      name: 'Elephant',
      price: '$2.99',
      discount: 10,
      category: 'Animals & Pets',
      format: 'FBX',
      polyCount: 'Low',
      license: 'Royalty Free',
      rating: 4,
      pbr: true,
      animated: false,
      rigged: false,
    },
    {
      image: 'https://media.sketchfab.com/models/73bf025d4a51401caa36c3e5950b4e65/thumbnails/81416d40064344ffb054042ae09194a9/822364e76c7642579e5831a8744016b5.jpeg',
      name: 'Cat',
      price: '$3.99',
      discount: 20,
      category: 'Animals & Pets',
      format: 'OBJ',
      polyCount: 'Medium',
      license: 'Editorial',
      rating: 5,
      pbr: false,
      animated: true,
      rigged: false,
    },
    {
      image: 'https://media.sketchfab.com/models/5e89e6689c134d54860e38eb35761ffe/thumbnails/d71ad53ff8dd48f084b667f77b90847c/56b5db8e8e7b46f1b41b9dc6355d06e9.jpeg',
      name: 'House',
      price: '$15.99',
      discount: 5,
      category: 'Architecture',
      format: 'GLTF',
      polyCount: 'High',
      license: 'Free',
      rating: 3,
      pbr: true,
      animated: false,
      rigged: true,
    },
    {
      image:'https://media.sketchfab.com/models/ac14ca0a453745eb87e345d2ae262a8c/thumbnails/e0a5aa29097b41e8a1ab0280eee8ed0e/daa8bc3893a9413a89cbf692c3938dc6.jpeg',
      name: 'Sports Car',
      price: '$12.99',
      discount: 15,
      category: 'Vehicles',
      format: 'FBX',
      polyCount: 'Medium',
      license: 'Royalty Free',
      rating: 4,
      pbr: false,
      animated: true,
      rigged: true,
    },
    {
      image: 'https://media.sketchfab.com/models/35fcc1a00a1340a295a0d7f8e8be9f1c/thumbnails/f4509dd5b4524d93a6957510eebb96c6/c4ce3195daba4b0c86dac6ad769d052b.jpeg',
      name: 'Spaceship',
      price: '$29.99',
      discount: 25,
      category: 'Sci-Fi',
      format: 'OBJ',
      polyCount: 'High',
      license: 'Editorial',
      rating: 5,
      pbr: true,
      animated: true,
      rigged: true,
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCOuyijHobNulsOdMnmP111BlFXRYfrJxfkQ&s',
      name: 'Fantasy Sword',
      price: '$4.99',
      discount: 30,
      category: 'Fantasy',
      format: 'GLTF',
      polyCount: 'Low',
      license: 'Free',
      rating: 2,
      pbr: true,
      animated: false,
      rigged: false,
    },
    {
      image: 'https://media.sketchfab.com/models/40da979cb23f492583ec89c4196cff4e/thumbnails/850105d91068406d8124914463e44ad2/76e7bdb5d4904ec3be52c414f9bf8bc4.jpeg',
      name: 'Tree',
      price: '$1.99',
      discount: 10,
      category: 'Nature',
      format: 'FBX',
      polyCount: 'Medium',
      license: 'Royalty Free',
      rating: 4,
      pbr: false,
      animated: false,
      rigged: false,
    },
    {
      image: 'https://media.sketchfab.com/models/0d3d169c665f4cdca608b906ced1b773/thumbnails/fb7cfc61895141e4b606dd8c6264a19f/318ab368ac734ee1a897d6b7c4c44f45.jpeg',
      name: 'Airplane',
      price: '$19.99',
      discount: 20,
      category: 'Vehicles',
      format: 'OBJ',
      polyCount: 'High',
      license: 'Editorial',
      rating: 5,
      pbr: true,
      animated: true,
      rigged: true,
    },
    {
      image: 'https://media.sketchfab.com/models/f71780758a79469d9988793e3a4a0f74/thumbnails/77d5434fb5f04b90b0c445141dcb537a/024513b5434c4aa3849505c95112b38d.jpeg',
      name: 'Robot',
      price: '$8.99',
      discount: 15,
      category: 'Sci-Fi',
      format: 'FBX',
      polyCount: 'Medium',
      license: 'Royalty Free',
      rating: 4,
      pbr: true,
      animated: true,
      rigged: true,
    },
    {
      image: 'https://media.sketchfab.com/models/a22c626ab8354931b534cab05c0c8ea8/thumbnails/747d0f1ab47e4658a9184065ebd36c31/b9c00c23dcd6430e8bb55114bda5e26e.jpeg',
      name: 'Tiger',
      price: '$2.49',
      discount: 5,
      category: 'Animals & Pets',
      format: 'OBJ',
      polyCount: 'Low',
      license: 'Free',
      rating: 3,
      pbr: false,
      animated: true,
      rigged: false,
    },
    {
      image: 'https://media.sketchfab.com/models/827e3eae661c48419d2616e2d7739952/thumbnails/0a03642a58d2434397468a4948b892ec/e69b9c3dc5ed44c5a675d55b12300ec8.jpeg',
      name: 'Castle',
      price: '$25.99',
      discount: 20,
      category: 'Architecture',
      format: 'GLTF',
      polyCount: 'High',
      license: 'Editorial',
      rating: 5,
      pbr: true,
      animated: false,
      rigged: true,
    },
    {
      image: 'https://media.sketchfab.com/models/eca98cf6cd084c1596cecf716e110c29/thumbnails/1c9a19593a454d2b9c0de1852408edda/984ff916e93a496c9a5fd8b2749599da.jpeg',
      name: 'Dragon',
      price: '$9.99',
      discount: 25,
      category: 'Fantasy',
      format: 'FBX',
      polyCount: 'Medium',
      license: 'Royalty Free',
      rating: 4,
      pbr: true,
      animated: true,
      rigged: true,
    },
    {
      image: 'https://media.sketchfab.com/models/38404e2077ca4b209cd2f1db30541b94/thumbnails/2ae49f0afc144af585a3ef6f2c72bf83/963617c700e745809708ae02cd4a8d82.jpeg',
      name: 'Motorcycle',
      price: '$11.99',
      discount: 10,
      category: 'Vehicles',
      format: 'OBJ',
      polyCount: 'High',
      license: 'Editorial',
      rating: 5,
      pbr: false,
      animated: false,
      rigged: true,
    },
    {
      image: 'https://media.sketchfab.com/models/6f6701e647594ef59ce3803648e1e51c/thumbnails/692f3bc7bf9c45da86d7b72d81d97d44/fc3e6fb31833465095179dfb44d07690.jpeg',
      name: 'Alien',
      price: '$7.49',
      discount: 15,
      category: 'Sci-Fi',
      format: 'FBX',
      polyCount: 'Medium',
      license: 'Royalty Free',
      rating: 4,
      pbr: true,
      animated: true,
      rigged: true,
    }
    // Add more models here
  ];

  filteredModels: Model[] = [];
  paginatedModels: Model[] = [];
  totalModelRecords: number = this.models.length;

  ngOnInit() {
    this.applyFilters();
  }

  // Model Pagination
  onModelPageChange(event: ModelPageEvent) {
    this.first = event.first || 0;
    this.rows = event.rows || 12;
    this.updatePaginatedModels();
  }

  updatePaginatedModels() {
    this.paginatedModels = this.filteredModels.slice(this.first, this.first + this.rows);
  }

  applyFilters() {
    this.filteredModels = this.models.filter(model =>
    (this.searchQuery === '' || model.name.toLowerCase().includes(this.searchQuery.toLowerCase())) &&
      (this.selectedCategory === 'Any' || model.category === this.selectedCategory) &&
      (this.selectedPrice === 500 || parseFloat(model.price.replace('$', '')) <= this.selectedPrice) &&
      (this.selectedFormat === 'Any' || model.format === this.selectedFormat) &&
      (this.selectedPolyCount === 'Any' || model.polyCount === this.selectedPolyCount) &&
      (this.selectedLicense === 'Any' || model.license === this.selectedLicense) &&
      (this.selectedRating === 'Any' || model.rating >= parseInt(this.selectedRating.charAt(0))) &&
      (!this.selectedPBR || model.pbr) &&
      (!this.selectedAnimated || model.animated) &&
      (!this.selectedRigged || model.rigged)
    );

    this.sortFilteredModels();
    this.totalModelRecords = this.filteredModels.length;
    this.updatePaginatedModels();
  }

  sortFilteredModels() {
    if (this.selectedSort === 'Price: Low to High') {
      this.filteredModels.sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')));
    } else if (this.selectedSort === 'Price: High to Low') {
      this.filteredModels.sort((a, b) => parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')));
    } else {
      // Add other sorting logic if needed
    }
  }
}
