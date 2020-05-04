import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionFocusComponent } from './accordion-focus/accordion-focus.component';
import { AutocompleteXssComponent } from './autocomplete-xss/autocomplete-xss.component';
import { CheckboxModalComponent } from './checkbox-modal/checkbox-modal.component';
import { IosContextMenuComponent } from './ios-context-menu/ios-context-menu.component';
import { LookupComponent } from './lookup/lookup.component';
import { NestedBusyComponent } from './nested-busy/nested-busy.component';
import { PopupmenuNavigationComponent } from './popupmenu-navigation/popupmenu-navigation.component';

const routes: Routes = [
  { path: 'ios-context-menu', component: IosContextMenuComponent },
  { path: 'nested-busy', component: NestedBusyComponent },
  { path: 'accordion-focus', component: AccordionFocusComponent },
  { path: 'autocomplete-xss', component: AutocompleteXssComponent },
  { path: 'popupmenu-navigation', component: PopupmenuNavigationComponent },
  { path: 'checkbox-modal', component: CheckboxModalComponent },
  { path: 'lookup', component: LookupComponent },
];

@NgModule({
  exports: [
    RouterModule,
  ],
  imports: [
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }
