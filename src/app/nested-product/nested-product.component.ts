import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { NestedProductService } from './nested-product.service';

@Component({
	selector: 'app-nested-product',
	templateUrl: './nested-product.component.html',
	styleUrls: [
		'./nested-product.component.css'
	]
})
export class NestedProductComponent implements OnInit {
	productArr: Product[] = [];

	totalPrice: number = 0;
	error: any;
	constructor(private service: NestedProductService) {}

	calcTotalPrice(): void {
		this.totalPrice = 0;
		console.log(this.productArr); // ?????? why [] ??????
		this.productArr.forEach(p => (this.totalPrice += p.price * p.qty));
	}

	update(product: Product): void {
		let p = this.productArr.find(p => p.id == product.id);
		if (p != undefined) {
			p.price = product.price;
			p.qty = product.qty;
		}
		console.log(this.productArr);
		this.calcTotalPrice();
	}

	delete(id: number): void {
		this.productArr = this.productArr.filter(p => p.id != id);
		// console.log(this.productArr);
		this.calcTotalPrice();
	}
	ngOnInit(): void {
		this.service
			.getProducts()
			.subscribe(
				data => (this.productArr = data),
				err => (this.error = err)
			);

		this.calcTotalPrice();
	}
}
