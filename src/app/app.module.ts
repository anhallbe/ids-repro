import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SohoComponentsModule } from 'ids-enterprise-ng';
import { AccordionFocusComponent } from './accordion-focus/accordion-focus.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutocompleteXssComponent } from './autocomplete-xss/autocomplete-xss.component';
import { AutoompleteSelectedComponent } from './autoomplete-selected/autoomplete-selected.component';
import { CheckboxModalComponent, InnerModalComponent } from './checkbox-modal/checkbox-modal.component';
import { DatagridDialogComponent } from './datagrid-dialog/datagrid-dialog.component';
import { DialogComponent } from './datagrid-dialog/dialog/dialog.component';
import { HomepageEditingComponent } from './homepage-editing/homepage-editing.component';
import { IosContextMenuComponent } from './ios-context-menu/ios-context-menu.component';
import { LookupSourceComponent } from './lookup-source/lookup-source.component';
import { LookupComponent } from './lookup/lookup.component';
import { NestedAboutComponent } from './nested-about/nested-about.component';
import { NestedBusyComponent } from './nested-busy/nested-busy.component';
import { PersonalizeMenuComponent } from './personalize-menu/personalize-menu.component';
import { PopupmenuNavigationComponent } from './popupmenu-navigation/popupmenu-navigation.component';
import { PopupmenuToolbarComponent } from './popupmenu-toolbar/popupmenu-toolbar.component';
import { TabsComponent } from './tabs/tabs.component';
import { DatagridShortComponent } from './datagrid-short/datagrid-short.component';


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
    PersonalizeMenuComponent,
    LookupSourceComponent,
    HomepageEditingComponent,
    PopupmenuToolbarComponent,
    DatagridDialogComponent,
    DialogComponent,
    DatagridShortComponent,
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
        return Soho.Locale.set('en-US').catch(err => console.error(`Failed to set locale`, err));
      },
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
