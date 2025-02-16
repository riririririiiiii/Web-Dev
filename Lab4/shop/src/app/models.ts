export class Item {
    id: number;
    name: string;
    description: string;
    price: string;
    imageLink: string;
    rating: number;
    productLink: string;
    constructor(id: number, name: string, description: string, price: string, imageLink: string, rating: number, productLink: string) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.price = price;
      this.imageLink = imageLink;
      this.rating = rating;
      this.productLink = productLink;
    }
  }
  
  