import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IosContextMenuComponent } from './ios-context-menu/ios-context-menu.component';
import { NestedBusyComponent } from './nested-busy/nested-busy.component';

const routes: Routes = [
  { path: 'ios-context-menu', component: IosContextMenuComponent },
  { path: 'nested-busy', component: NestedBusyComponent },
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
