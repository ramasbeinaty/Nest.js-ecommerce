import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from './product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  appendProduct(title: string, desc: string, price: number) {
    const prodId = Math.random().toString();
    const newProduct = new Product(prodId, title, desc, price);
    this.products.push(newProduct);
    return prodId;
  }

  getProducts() {
    return [...this.products];
  }

  getSingleProduct(productId: string) {
    const product = this.products.find((prod) => prod.id === productId);
    if (!product) {
      throw new NotFoundException('Could not find product');
    }
    return { ...product };
  }
}

/*
*** For now, using the date with timestamp as a unique id.

TODO: should look into using an express library for creating a new id.

TODO: could map this.products so the individual products are also a copy.
            atm, they are references.

*/
