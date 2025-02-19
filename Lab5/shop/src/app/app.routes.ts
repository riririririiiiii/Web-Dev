import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { CategoriesComponent } from './category/category.component';

export const routes: Routes = [
    { path: '', redirectTo: 'products', pathMatch: 'full' }, 
    { path: 'products', component: ProductListComponent }    
  ];