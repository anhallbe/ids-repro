import { Component } from "@angular/core";
import { SohoAboutService, SohoButtonModule, SohoModalDialogService } from "ids-enterprise-ng";

@Component({
    selector: "app-nested-about",
    templateUrl: "./nested-about.component.html",
    styleUrls: ["./nested-about.component.css"],
    standalone: true,
    imports: [SohoButtonModule],
})
export class NestedAboutComponent {
  constructor(
    private aboutService: SohoAboutService,
    private modalService: SohoModalDialogService,
  ) {}

  openAbout() {
    const content = `
      <div style="text-align: center;">
        <button class='hyperlink' type='button' id='nestedAboutDialogButton'>OPEN NESTED</button>
      </div>`;
    this.aboutService
      .about()
      .appName("AppName")
      .productName("ProductName")
      .version("1.0")
      .content(content)
      .open();

    document.getElementById("nestedAboutDialogButton").onclick = () => {
      this.modalService
        .message("")
        .options({
          content: "This is a nested dialog",
          showCloseBtn: true,
          title: "Nested Dialog",
        })
        .open();
    };
  }
}
