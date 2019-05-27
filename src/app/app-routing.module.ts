import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IosContextMenuComponent } from './ios-context-menu/ios-context-menu.component';
import { NestedBusyComponent } from './nested-busy/nested-busy.component';
import { AccordionFocusComponent } from './accordion-focus/accordion-focus.component';
import { AutocompleteXssComponent } from './autocomplete-xss/autocomplete-xss.component';

const routes: Routes = [
  { path: 'ios-context-menu', component: IosContextMenuComponent },
  { path: 'nested-busy', component: NestedBusyComponent },
  { path: 'accordion-focus', component: AccordionFocusComponent },
  { path: 'autocomplete-xss', component: AutocompleteXssComponent },
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
