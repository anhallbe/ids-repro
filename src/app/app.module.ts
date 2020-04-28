import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SohoComponentsModule } from 'ids-enterprise-ng';
import { AccordionFocusComponent } from './accordion-focus/accordion-focus.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutocompleteXssComponent } from './autocomplete-xss/autocomplete-xss.component';
import { CheckboxModalComponent, InnerModalComponent } from './checkbox-modal/checkbox-modal.component';
import { IosContextMenuComponent } from './ios-context-menu/ios-context-menu.component';
import { NestedBusyComponent } from './nested-busy/nested-busy.component';
import { PopupmenuNavigationComponent } from './popupmenu-navigation/popupmenu-navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    IosContextMenuComponent,
    NestedBusyComponent,
    AccordionFocusComponent,
    AutocompleteXssComponent,
    PopupmenuNavigationComponent,
    CheckboxModalComponent,
    InnerModalComponent,
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
