import { Component, HostListener } from "@angular/core";
import { SohoTabsModule } from "ids-enterprise-ng";

@Component({
    selector: "app-tabs",
    templateUrl: "./tabs.component.html",
    styleUrls: ["./tabs.component.css"],
    standalone: true,
    imports: [SohoTabsModule],
})
export class TabsComponent {
  @HostListener("window:resize") resized() {
    console.log(
      `Window resized. Width:${window.innerWidth}, Height:${window.innerHeight}`,
    );
  }

  triggerResize() {
    window.dispatchEvent(new Event("resize"));
  }
}
