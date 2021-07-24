import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
	providedIn: 'root'
})
export class NestedProductService {
	constructor(private http: HttpClient) {}

	private URL: string = 'assets/products.json';

	getProducts(): Observable<Product[]> {
		return this.http.get<Product[]>(this.URL);
	}
}
