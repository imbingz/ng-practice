import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.component.html',
	styleUrls: [ './user-profile.component.css' ]
})
export class UserProfileComponent implements OnInit {
	userData = {
		userName: 'John Doe',
		emailId: 'john.doe@gmail.com',
		contactNo: 9876543210,
		address: '424  McVaney Road, Franklin, North Carolina, 28734',
		height: `5'6"`,
		weight: 82,
		education: 'High school diploma or GED'
	};
	constructor() {}

	ngOnInit(): void {}
}
