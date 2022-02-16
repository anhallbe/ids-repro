import { Component, ViewChild } from '@angular/core';
import { SohoSearchFieldComponent } from 'ids-enterprise-ng';

@Component({
  selector: 'app-searchfield-no-categories',
  templateUrl: './searchfield-updated.component.html',
  styleUrls: ['./searchfield-updated.component.css']
})
export class SearchfieldUpdatedComponent {

  @ViewChild(SohoSearchFieldComponent)
  private searchfield: SohoSearchFieldComponent;

  query = "";
  categoryMultiselect = true;
  // categories = [];
  showCategoryText = true;
  categories = [
    {
      name: "Cats",
      value: "CATS",
      checked: true,
    },
    {
      name: "Dogs",
      value: "DOGS",
      checked: true,
    },
    {
      name: "Hippos",
      value: "HIPPOS",
      checked: true,
    },
    {
      name: "Parrots",
      value: "PARROTS",
      checked: true,
    }
  ]

  constructor() {
  }

  updateSearchfield() {
    this.categories.forEach((cat) => cat.checked = !cat.checked);
    this.searchfield.updated();
  }

}
