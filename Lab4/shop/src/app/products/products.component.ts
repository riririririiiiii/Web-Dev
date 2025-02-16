import { Component } from '@angular/core';
import { Item } from "../models";
import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppModule { }

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})



export class ProductsComponent {
  products: Item[] = [];

  constructor() {
    this.products.push(
      new Item(1, 'Пылесос Deerma DX700 белый', 'This is Пылесос Deerma DX700 белый', '14 980', 'https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=gallery-large', 5.0,  'https://kaspi.kz/shop/p/deerma-dx700-belyi-3701383/?c=750000000'),
      new Item(2, 'Блендер Slaouwo HB-2075 черный', 'This is Блендер Slaouwo HB-2075 черный', '6 927', 'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha1/67141660606494.jpg?format=gallery-large', 4.8, 'https://kaspi.kz/shop/p/slaouwo-hb-2075-chernyi-108151055/?c=750000000'),
      new Item(3, 'Электрогриль Xiaomi Smart Air Fryer 6.5L BHR7357EU', 'This is Электрогриль Xiaomi Smart Air Fryer 6.5L BHR7357EU', '59 400', 'https://resources.cdn-kaspi.kz/img/m/p/hd0/h3f/87089997873182.jpg?format=gallery-large', 5.0, 'https://kaspi.kz/shop/p/elektrogril-xiaomi-smart-air-fryer-6-5l-bhr7357eu-118273472/?c=750000000'),
      new Item(4, 'Микроволновая печь LG MS-2042DB черный', 'This is Микроволновая печь LG MS-2042DB черный', '46 320', 'https://resources.cdn-kaspi.kz/img/m/p/h87/h60/63757616578590.jpg?format=gallery-large', 5.0, 'https://kaspi.kz/shop/p/lg-ms-2042db-chernyi-2900200/?c=750000000'),
      new Item(5, 'Очиститель воздуха Xiaomi Smart Air Purifier 4 Lite AC-M17-SC белый', 'This isОчиститель воздуха Xiaomi Smart Air Purifier 4 Lite AC-M17-SC белый', '76 000', 'https://resources.cdn-kaspi.kz/img/m/p/h30/h42/64319244173342.jpg?format=gallery-large', 5.0, 'https://kaspi.kz/shop/p/ochistitel-vozduha-xiaomi-smart-air-purifier-4-lite-ac-m17-sc-belyi-103535997/?c=750000000'),
      new Item(6, 'Холодильник LG GC-B459MLWM серый', 'This is Холодильник LG GC-B459MLWM серый', '244 400', 'https://resources.cdn-kaspi.kz/img/m/p/h40/hde/85253298913310.jpg?format=gallery-large', 5.0, 'https://kaspi.kz/shop/p/lg-gc-b459mlwm-seryi-116895924/?c=750000000'),
      new Item(7, 'Стиральная машина Samsung WW70AG5S21EELD белый', 'This is Стиральная машина Samsung WW70AG5S21EELD белый', '177 837', 'https://resources.cdn-kaspi.kz/img/m/p/hce/h01/82826771955742.jpg?format=gallery-large', 5.0, 'https://kaspi.kz/shop/p/samsung-ww70ag5s21eeld-belyi-112549979/?c=750000000'),
      new Item(8, 'Робот-пылесос Xiaomi Robot Vacuum S20 BHR8629EU белый', 'This is Робот-пылесос Xiaomi Robot Vacuum S20 BHR8629EU белый', '79 864', 'https://resources.cdn-kaspi.kz/img/m/p/hb1/had/86299588788254.jpg?format=gallery-large', 5.0, 'https://kaspi.kz/shop/p/xiaomi-robot-vacuum-s20-bhr8629eu-belyi-120489305/?c=750000000'),
      new Item(9, 'Отпариватель Sunqar PRO S200 розовый', 'This is Отпариватель Sunqar PRO S200 розовый', '51 990', 'https://resources.cdn-kaspi.kz/img/m/p/pcf/p7f/10447584.jpeg?format=gallery-large', 5.0, 'https://kaspi.kz/shop/p/sunqar-pro-s200-rozovyi-121118551/?c=750000000'),
      new Item(10, 'Кухонный комбайн KENWOOD KCL95.004SI Cooking Chef XL серебристый', 'This is Кухонный комбайн KENWOOD KCL95.004SI Cooking Chef XL серебристый', '649 990', 'https://resources.cdn-kaspi.kz/img/m/p/h72/he4/63921091969054.jpg?format=gallery-large', 5.0, 'https://kaspi.kz/shop/p/kenwood-kcl95-004si-cooking-chef-xl-serebristyi-100883789/?c=750000000'),
    );
  }

  sharing(id: number): void {
    const productLink = this.products[id-1].productLink;
    const encodedLink = encodeURIComponent(productLink);
    const telegramShareUrl = `https://t.me/share/url?url=${encodedLink}`;
    window.open(telegramShareUrl, '_blank');
  }

  }