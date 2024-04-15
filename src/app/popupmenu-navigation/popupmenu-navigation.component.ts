
import { Component } from "@angular/core";
import { SohoButtonModule, SohoContextMenuModule, SohoPopupMenuModule } from "ids-enterprise-ng";

@Component({
    selector: "app-popupmenu-navigation",
    templateUrl: "./popupmenu-navigation.component.html",
    styleUrls: ["./popupmenu-navigation.component.css"],
    standalone: true,
    imports: [
    SohoButtonModule,
    SohoContextMenuModule,
    SohoPopupMenuModule
],
})
export class PopupmenuNavigationComponent {
  showItem = true;

  hideItem() {
    this.showItem = false;
    setTimeout(() => {
      this.showItem = true;
    }, 1000);
  }
}
