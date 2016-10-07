import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ProductsComponent} from './products.component';
import {ProductService} from './products.service';

@NgModule({
	imports: [BrowserModule],
	providers: [ProductService],
	declarations: [AppComponent, ProductsComponent],
	bootstrap: [AppComponent]
})
export class AppModule {}
