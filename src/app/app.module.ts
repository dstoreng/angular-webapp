import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {SharedModule} from "./shared/shared.module";
import {NavModule} from "./nav/nav.module";

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		NoopAnimationsModule,
		AppRoutingModule,
		SharedModule,
		NavModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
