import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionFocusComponent } from './accordion-focus/accordion-focus.component';
import { AutocompleteXssComponent } from './autocomplete-xss/autocomplete-xss.component';
import { AutoompleteSelectedComponent } from './autoomplete-selected/autoomplete-selected.component';
import { CheckboxModalComponent } from './checkbox-modal/checkbox-modal.component';
import { QuickMathsComponent } from './double-dropdown/quick-maths.component';
import { DoubleTextEditorComponent } from './double-text-editor/double-text-editor.component';
import { HomepageEditingComponent } from './homepage-editing/homepage-editing.component';
import { IosContextMenuComponent } from './ios-context-menu/ios-context-menu.component';
import { LookupSourceComponent } from './lookup-source/lookup-source.component';
import { LookupComponent } from './lookup/lookup.component';
import { NestedAboutComponent } from './nested-about/nested-about.component';
import { NestedBusyComponent } from './nested-busy/nested-busy.component';
import { PopupmenuNavigationComponent } from './popupmenu-navigation/popupmenu-navigation.component';
import { SearchfieldUpdatedComponent } from './searchfield-updated/searchfield-updated.component';
import { TabsComponent } from './tabs/tabs.component';

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
  { path: 'homepage-editing', component: HomepageEditingComponent },
  { path: 'double-text-editor', component: DoubleTextEditorComponent },
  { path: 'searchfield-updated', component: SearchfieldUpdatedComponent },
  { path: 'quick-maths', component: QuickMathsComponent }
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
