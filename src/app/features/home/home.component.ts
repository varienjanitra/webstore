import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Product from 'src/app/models/product.model';
import { ProductService } from 'src/app/product.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';

@Component({
  selector: 'feature-home',
  standalone: true,
  imports: [
    ProductCardComponent,
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  productList: Product[] = [];

  constructor(
    private productService: ProductService
  ) {
    this.productList = productService.getProducts();
  }
}
