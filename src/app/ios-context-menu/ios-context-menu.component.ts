import { Component } from "@angular/core";
import { SohoContextMenuModule, SohoHomePageModule, SohoPopupMenuModule, SohoToastService } from "ids-enterprise-ng";

@Component({
    selector: "app-ios-context-menu",
    templateUrl: "./ios-context-menu.component.html",
    styleUrls: ["./ios-context-menu.component.css"],
    standalone: true,
    imports: [
        SohoHomePageModule,
        SohoContextMenuModule,
        SohoPopupMenuModule,
    ],
})
export class IosContextMenuComponent {
  list = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  constructor(private toastService: SohoToastService) {}

  itemClicked(item: string) {
    this.toastService.show({
      title: "Item Clicked",
      message: item,
    });
  }
}
