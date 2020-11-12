import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product list';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  _listFilter: string;
  _listSort: string;
  filteredProducts: IProduct[];
  sortedProducts: IProduct[];

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  get listSort(): string {
    return this._listSort;
  }
  set listSort(value: string) {
    this._listSort = value;
    this.sortedProducts = this.listSort ? this.performSort(this.listSort) : this.products;
  }

  products: IProduct[] =
    [
      {
        "productId": 8,
        "productName": "Saw",
        "productCode": "TBX-0022",
        "releaseDate": "May 15, 2019",
        "description": "15-inch steel blade hand saw",
        "price": 11.55,
        "starRating": 3.7,
        "imageUrl": "assets/images/saw.png"
      },
      {
        "productId": 10,
        "productName": "Video Game Controller",
        "productCode": "GMG-0042",
        "releaseDate": "October 15, 2018",
        "description": "Standard two-button video game controller",
        "price": 35.95,
        "starRating": 4.6,
        "imageUrl": "assets/images/xbox-controller.png"
      },
      {
        "productId": 11,
        "productName": "Video Game Pad",
        "productCode": "GMG-0043",
        "releaseDate": "October 15, 2018",
        "description": "Standard two-button video game pad",
        "price": 25.95,
        "starRating": 3.6,
        "imageUrl": "assets/images/xbox-controller.png"
      },
      {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2019",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "assets/images/leaf_rake.png"
      },
      {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2019",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "assets/images/garden_cart.png"
      },
      {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2019",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "assets/images/hammer.png"
      }
    ];

  constructor() {
    this.filteredProducts = this.products;
    this.listFilter = 'cart';
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product list: ' + message;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  performSort(sortBy: string): IProduct[] {
    console.log(`sortuj po ${sortBy}`);
    return this.filteredProducts.sort((a, b) => {
      let result: number;
      if (typeof a[sortBy] !== 'string') {
        result = a[sortBy] !== b[sortBy] ? a[sortBy] < b[sortBy] ? -1 : 1 : 0
      } else {
        result = a[sortBy].toLowerCase() !== b[sortBy].toLowerCase() ? a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? -1 : 1 : 0
      }
      return result;
    });
  }

  toogleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log("In OnInit");
  }


}