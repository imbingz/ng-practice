import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TemplateEx1Component } from './template-ex1/template-ex1.component';
import { FormsModule } from '@angular/forms';
import { SortPipe } from './sort.pipe';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { NestedProductComponent } from './nested-product/nested-product.component';
import { NestedProductRowComponent } from './nested-product/nested-product-row/nested-product-row.component';

@NgModule({
	declarations: [
		AppComponent,
		UserProfileComponent,
		TemplateEx1Component,
		SortPipe,
		PipeDemoComponent,
  NestedProductComponent,
  NestedProductRowComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgbModule,
		FormsModule
	],
	providers: [],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {}
