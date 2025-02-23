import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductItemComponent } from './product-item/product-item.component';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';


export const routes: Routes = [
  { path: 'category/:id', component: ProductListComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemComponent
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }

