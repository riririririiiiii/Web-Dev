/*import { Injectable } from '@angular/core';
import { Product } from './models';
*/
export interface Category {
  id: number;
  name: string;
}

export const categories: Category[] = [
  { id: 1, name: 'Мелкая техника для кухни' },
  { id: 2, name: 'Малая техника для дома' },
  { id: 3, name: 'Климатическая техника' },
  { id: 4, name: 'Крупная техника для дома' }
];
/*
@Injectable({
  providedIn: 'root',
})
export class ProductService {

    getProductsByCategory(categoryName: string | null, products: Product[]): Product[] {
        if (!categoryName) {
          return products;  // возвращаем все продукты, если категория не выбрана
        }
        return products.filter(p => p.category === categoryName);
      }
      
      

  removeProduct(id: number, products: Product[]): Product[] {
    return products.filter(p => p.id !== id); 
  }

  likeProduct(id: number, products: Product[]): Product[] {
    // Ищем продукт по ID
    const product = products.find(p => p.id === id);
    if (product) {
      product.like = product.like + (product.like === 0 ? 1 : -1);
    }
    return products;  
  }
}
*/