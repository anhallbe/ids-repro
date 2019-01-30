import { Component } from '@angular/core';
import { SohoToastService } from 'ids-enterprise-ng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
  ];

  constructor(private toastService: SohoToastService) {}

  itemClicked(item: string) {
    this.toastService.show({
      title: 'Item Clicked',
      message: item,
    });
  }
}
