import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Product, products } from '../models';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent], 
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  @Input() products: Product[] = [];  
  @Output() manageLikeIntent = new EventEmitter<number>();
  @Output() deleteIntent = new EventEmitter<number>();

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const categoryIdFromRoute = this.route.snapshot.paramMap.get('categoryId');
if (categoryIdFromRoute !== null) {
  const categoryId = Number(categoryIdFromRoute);
  this.products = products.filter((product) => Number(product.category) === categoryId);
}

    
  }

  onDelete(id: number) {
    this.deleteIntent.emit(id); 
  }

  onLikePress(id: number) {
    this.manageLikeIntent.emit(id); 
  }
}

