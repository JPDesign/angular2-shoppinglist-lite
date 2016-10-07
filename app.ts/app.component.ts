import {Component} from '@angular/core';
import {Product} from './product';
import {ProductService} from './products.service';

@Component({
	selector: 'shopping-list',
	template: `
		<h1>{{title}}</h1>
		<p>Platzhalter für die Liste ...</p>
		<product-list [products]="products"></product-list>
	`,
	styleUrls: ['./app/templates/app.styles.css']
})
export class AppComponent {
	constructor(
		private productService: ProductService
	) {};
	title: string = 'Einkaufsliste';
	products: Product[];
	ngOnInit(): void {
		this
			.productService.getProducts()
			.then(prods => this.products = prods)
		;
	}
}
