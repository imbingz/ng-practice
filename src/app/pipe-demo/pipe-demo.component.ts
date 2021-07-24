import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-pipe-demo',
	templateUrl: './pipe-demo.component.html',
	styleUrls: [ './pipe-demo.component.css' ]
})
export class PipeDemoComponent implements OnInit {
	sortoption: string = '';
	productsList = [
		{ productName: 'Samsung J7', price: 18000 },
		{ productName: 'Apple iPhone 6S', price: 60000 },
		{ productName: 'Lenovo K5 Note', price: 10000 },
		{ productName: 'Nokia 6', price: 15000 },
		{ productName: 'Vivo V5 Plus', price: 26000 }
	];

	constructor() {}

	ngOnInit(): void {}
}
