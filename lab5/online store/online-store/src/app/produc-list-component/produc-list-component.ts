import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card-component/product-card-component';


@Component({
    selector: 'app-produc-list-component',
    imports: [CommonModule, ProductCardComponent],
    templateUrl: './produc-list-component.html',
    styleUrl: './produc-list-component.css',
})
export class ProducListComponent {
    
}
