import { Component, HostListener } from "@angular/core";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.css"],
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
