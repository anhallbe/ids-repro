import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SohoComponentsModule } from 'ids-enterprise-ng';
import { AppComponent } from './app.component';
import { IosContextMenuComponent } from './ios-context-menu/ios-context-menu.component';
import { AppRoutingModule } from './app-routing.module';
import { NestedBusyComponent } from './nested-busy/nested-busy.component';
import { AccordionFocusComponent } from './accordion-focus/accordion-focus.component';
import { AutocompleteXssComponent } from './autocomplete-xss/autocomplete-xss.component';
import { FormsModule } from '@angular/forms';
import { PopupmenuNavigationComponent } from './popupmenu-navigation/popupmenu-navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    IosContextMenuComponent,
    NestedBusyComponent,
    AccordionFocusComponent,
    AutocompleteXssComponent,
    PopupmenuNavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SohoComponentsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
