import {
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
	SimpleChanges,
	OnChanges
} from '@angular/core';
import { Product } from '../product';

@Component({
	selector: '[app-nested-product-row]',
	templateUrl: './nested-product-row.component.html',
	styleUrls: [
		'./nested-product-row.component.css'
	]
})
export class NestedProductRowComponent implements OnInit, OnChanges {
	@Input() product: Product = new Product(0, 'na', 0, 0);
	@Output() updateEvent: EventEmitter<Product> = new EventEmitter();
	@Output() deleteEvent: EventEmitter<number> = new EventEmitter();

	errorMsg: string = 'Please enter a quantity';

	constructor() {}

	onChange(): void {
		console.log(this.product);
		this.updateEvent.emit(this.product);
	}

	onDelete(): void {
		console.log('onDelete');
		this.deleteEvent.emit(this.product.id);
	}

	ngOnInit(): void {}

	ngOnChanges(changes: SimpleChanges): void {
		console.log('ngOnChange');
		setTimeout(() => {
			console.log(changes);
			this.onChange();
		});
	}
}
