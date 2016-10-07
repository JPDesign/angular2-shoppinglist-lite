import {Injectable} from '@angular/core';
import {Product} from './product';
import {PRODUCTS} from './productlist';

@Injectable()
export class ProductService {
	getProducts(): Promise<Product[]> {
		return Promise.resolve(PRODUCTS);
	};
}