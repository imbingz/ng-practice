import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-template-ex1',
	templateUrl: './template-ex1.component.html',
	styleUrls: [ './template-ex1.component.css' ]
})
export class TemplateEx1Component implements OnInit {
	searchName: string = '';
	isHidden: boolean = true;

	age: number = 0;

	year: number = new Date().getFullYear() - this.age;

	message: string = '';

	checkAge(): void {
		this.isHidden = false;
		if (this.age > 21) {
			this.message = 'You are an Adult';
		} else if (this.age >= 13 && this.age <= 21) {
			this.message = 'You are a teenager';
		} else {
			this.message = 'You are a kid';
		}
	}

	constructor() {}

	ngOnInit(): void {}
}
