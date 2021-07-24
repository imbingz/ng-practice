import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: '[app-nested-product-row]',
	templateUrl: './nested-product-row.component.html',
	styleUrls: [
		'./nested-product-row.component.css'
	]
})
export class NestedProductRowComponent implements OnInit {
	@Input() product: any;
	@Output() getPrice: EventEmitter<number> = new EventEmitter();

	qty: number = 1;
	errorMsg: string = 'Please enter a quantity';
	totalPrice: number = 0;
	constructor() {}

	onChange() {
		this.totalPrice = this.product.price * this.qty;
		this.getPrice.emit(this.totalPrice);
	}

	ngOnInit(): void {
		console.log(this.product);
	}
}
