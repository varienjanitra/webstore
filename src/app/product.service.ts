import { Injectable } from '@angular/core';
import Product from './models/product.model';
import { productsDb } from './products.mockdb';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productDb: Product[] = productsDb;

  constructor() { }

  getProducts(): Product[] {
    return this.productDb;
  }
}
