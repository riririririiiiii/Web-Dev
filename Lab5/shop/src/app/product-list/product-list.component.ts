import { Component } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { products as initProducts} from '../models';
import { Product, products } from '../models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [ 
      ProductItemComponent,
    ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const categoryIdFromRoute = Number(routeParams.get('categoryId')); 

    this.products = products.filter((product: Product) => product.category === categoryIdFromRoute.toString());


  }


  onDelete(id: number){
    this.products = this.products.filter(product => product.id !== id)
  }

  onLikePress(id: number){
    let product = this.products.find(product => product.id === id)
    /*if (product == undefined){
      alert("Something when wrong")
    }*/if(product){
      product.like = (product?.like ?? 0) + 1
    }
  }
}
