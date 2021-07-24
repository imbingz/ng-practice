import { Component, OnInit } from '@angular/core';

import { Product } from './product';

@Component({
	selector: 'app-nested-product',
	templateUrl: './nested-product.component.html',
	styleUrls: [
		'./nested-product.component.css'
	]
})
export class NestedProductComponent implements OnInit {
	productArr: Product[] = [
		{
			id: 1,
			name: 'Mobile',
			price: 10000,
			Requantity: 1
		},
		{
			id: 2,
			name: 'Bag',
			price: 500,
			Requantity: 1
		},
		{
			id: 3,
			name: 'Shoe',
			price: 1000,
			Requantity: 1
		},
		{
			id: 4,
			name: 'Groceries',
			price: 700,
			Requantity: 1
		},
		{
			id: 5,
			name: 'Furniture',
			price: 15000,
			Requantity: 1
		},
		{
			id: 6,
			name: 'Laptop',
			price: 35000,
			Requantity: 1
		}
	];

	isHidden: boolean = true;
	totalPrice: number = 0;
	constructor() {}

	ngOnInit(): void {
		console.log(this.productArr);
	}
}
