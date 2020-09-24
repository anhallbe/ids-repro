import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SohoComponentsModule } from 'ids-enterprise-ng';
import { AccordionFocusComponent } from './accordion-focus/accordion-focus.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutocompleteXssComponent } from './autocomplete-xss/autocomplete-xss.component';
import { CheckboxModalComponent, InnerModalComponent } from './checkbox-modal/checkbox-modal.component';
import { IosContextMenuComponent } from './ios-context-menu/ios-context-menu.component';
import { LookupComponent } from './lookup/lookup.component';
import { NestedBusyComponent } from './nested-busy/nested-busy.component';
import { PopupmenuNavigationComponent } from './popupmenu-navigation/popupmenu-navigation.component';
import { TabsComponent } from './tabs/tabs.component';
import { AutoompleteSelectedComponent } from './autoomplete-selected/autoomplete-selected.component';
import { NestedAboutComponent } from './nested-about/nested-about.component';


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
    LookupComponent,
    TabsComponent,
    AutoompleteSelectedComponent,
    NestedAboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SohoComponentsModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {
        Soho.Locale.culturesPath = '/assets/ids-enterprise/js/cultures/';
        Soho.Locale.set('en-US');
      },
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
