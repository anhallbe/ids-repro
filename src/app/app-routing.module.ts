import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionFocusComponent } from './accordion-focus/accordion-focus.component';
import { AutocompleteXssComponent } from './autocomplete-xss/autocomplete-xss.component';
import { CheckboxModalComponent } from './checkbox-modal/checkbox-modal.component';
import { IosContextMenuComponent } from './ios-context-menu/ios-context-menu.component';
import { LookupComponent } from './lookup/lookup.component';
import { NestedBusyComponent } from './nested-busy/nested-busy.component';
import { PopupmenuNavigationComponent } from './popupmenu-navigation/popupmenu-navigation.component';
import { TabsComponent } from './tabs/tabs.component';
import { AutoompleteSelectedComponent } from './autoomplete-selected/autoomplete-selected.component';
import { NestedAboutComponent } from './nested-about/nested-about.component';
import { LookupSourceComponent } from './lookup-source/lookup-source.component';

const routes: Routes = [
  { path: 'ios-context-menu', component: IosContextMenuComponent },
  { path: 'nested-busy', component: NestedBusyComponent },
  { path: 'accordion-focus', component: AccordionFocusComponent },
  { path: 'autocomplete-xss', component: AutocompleteXssComponent },
  { path: 'popupmenu-navigation', component: PopupmenuNavigationComponent },
  { path: 'checkbox-modal', component: CheckboxModalComponent },
  { path: 'lookup', component: LookupComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'autocomplete-selected', component: AutoompleteSelectedComponent },
  { path: 'nested-about', component: NestedAboutComponent },
  { path: 'lookup-source', component: LookupSourceComponent },
];

@NgModule({
  exports: [
    RouterModule,
  ],
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
  ]
})
export class AppRoutingModule { }
