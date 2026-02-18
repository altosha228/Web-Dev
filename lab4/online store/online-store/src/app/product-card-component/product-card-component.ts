import { Component, input } from '@angular/core';
import {product} from '../models/product.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-card-component',
  imports: [CommonModule],
  templateUrl: './product-card-component.html',
  styleUrl: './product-card-component.css',
})
export class ProductCardComponent {
    product = input.required<product>();

    getWhatsAppLink() : string 
    {
        const text = 'Check out this product: ${this.product().link}';
        return 'https://wa.me/?text=${encodeURIComponent(text)}';
    }

    getTelegramLink() : string 
    {
        const url = this.product().link;
        const text = `Check out this ${this.product().name}`;
        return `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    }
}
