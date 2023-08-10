import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ProductService } from '../../product.service';
import Product from '../../models/product.model';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() products: Product[] = [];

  constructor() { }
}
