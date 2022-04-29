import { Component, OnInit } from '@angular/core';
import { SohoModalDialogService } from 'ids-enterprise-ng';
import { ExampleModalComponent } from './example-modal.component';

@Component({
  selector: 'app-sticky-dropdown-menu',
  templateUrl: './sticky-dropdown-menu.component.html',
  styleUrls: ['./sticky-dropdown-menu.component.css']
})
export class StickyDropdownMenuComponent implements OnInit {

  outsideMenuId = "outsideMenu"

  constructor(private dialogService: SohoModalDialogService) { }

  ngOnInit(): void {

  }

  openModal() {
    const buttons = [{
      text: "Ok",
      click: (e, modal) => {
        modal.close();
      },
      isDefault: true
    }];

    const dialog = this.dialogService
      .modal(ExampleModalComponent)
      .title("Open the dropdown and click the button").buttons(buttons)

    dialog.open();
  }

}