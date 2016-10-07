import {Component, Input} from '@angular/core';
import {Product} from './product';

@Component({
	selector: 'product-list',
	templateUrl: './app/templates/products.component.html',
	styleUrls: ['./app/templates/products.styles.css']
})
export class ProductsComponent {
	title = 'Produkte';
	@Input() products: Product[];
}
