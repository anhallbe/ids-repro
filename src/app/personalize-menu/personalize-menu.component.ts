import { KeyValuePipe } from "@angular/common";
import { Component, OnInit, ViewChild } from "@angular/core";
import { SohoMenuButtonModule, SohoPersonalizeDirective, SohoPersonalizeModule } from "ids-enterprise-ng";

@Component({
    selector: "app-personalize-menu",
    templateUrl: "./personalize-menu.component.html",
    styleUrls: ["./personalize-menu.component.css"],
    standalone: true,
    imports: [
    SohoMenuButtonModule,
    SohoPersonalizeModule,
    KeyValuePipe
],
})
export class PersonalizeMenuComponent implements OnInit {
  @ViewChild(SohoPersonalizeDirective, { static: true })
  personalize: SohoPersonalizeDirective;
  currentTheme: string;
  currentColor: string;

  themes: SohoTheme[];

  ngOnInit(): void {
    const defaultColor = this.personalize.personalizationColors().default;
    this.setColor(defaultColor);

    this.themes = this.personalize.themes();
    const defaultTheme = this.personalize.currentTheme;
    this.setTheme(defaultTheme);
  }

  setColor(color: SohoPersonalizationColor) {
    this.currentColor = color.name;
    if (color.id === "default") {
      this.personalize.colors = "";
    } else {
      this.personalize.colors = color.value;
    }
  }

  setTheme(theme: SohoTheme) {
    this.currentTheme = theme.name;
    this.personalize.theme = theme.id;
  }
}
