import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-item',
  imports: [ RouterModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product!: Product; 
  @Output() deleteIntent = new EventEmitter<number>();
  @Output() manageLikeIntent = new EventEmitter<number>();

  constructor(private route: ActivatedRoute) {}

  share(link: string) {
    const shareMessage = `Я делюсь с тобой ссылкой на крутой продукт: ${link}`;
    const telegramLink = `https://t.me/share/url?url=${encodeURIComponent(shareMessage)}`;
    window.location.href = telegramLink;
  }

  onDelete(id: number) {
    this.deleteIntent.emit(id);
  }

  onLikePress(id: number) {
    this.manageLikeIntent.emit(id);
  }

  getStars(rating: number): string {
    return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
  }
}