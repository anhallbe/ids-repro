import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SohoComponentsModule } from 'ids-enterprise-ng';
import { AppComponent } from './app.component';
import { IosContextMenuComponent } from './ios-context-menu/ios-context-menu.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    IosContextMenuComponent
  ],
  imports: [
    BrowserModule,
    SohoComponentsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
