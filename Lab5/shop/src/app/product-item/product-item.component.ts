import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';

@Component({
  selector: 'app-product-item',
  imports: [ RouterModule, RouterOutlet
    ],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() deleteIntent = new EventEmitter<number>()
  @Output() manageLikeIntent = new EventEmitter<number>()


  share(link: string) {
    const shareMessage = `Я делюсь с тобой ссылкой на крутой продукт:  ${link}`;
    const telegramLink = `https://t.me/share/url?url=${encodeURIComponent(shareMessage)}`;
    window.location.href = telegramLink;
  }

  delete(id: number){
    this.deleteIntent.emit(id)
  }

  manageLike(id: number){
    this.manageLikeIntent.emit(id)
  }

  getStars(rating: number): string {
    return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
  }
}
