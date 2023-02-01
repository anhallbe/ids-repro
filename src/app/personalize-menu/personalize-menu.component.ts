import { Component, OnInit, ViewChild } from "@angular/core";
import { SohoPersonalizeDirective } from "ids-enterprise-ng";

@Component({
  selector: "app-personalize-menu",
  templateUrl: "./personalize-menu.component.html",
  styleUrls: ["./personalize-menu.component.css"],
})
export class PersonalizeMenuComponent implements OnInit {
  @ViewChild(SohoPersonalizeDirective, { static: true })
  personalize: SohoPersonalizeDirective;
  currentTheme: string;
  currentColor: string;

  themes: SohoTheme[];

  constructor() {}

  ngOnInit(): void {
    const defaultColor = this.personalize.personalizationColors().default;
    this.setColor(defaultColor);

    this.themes = this.personalize
      .themes()
      .filter((theme) => theme.name.includes("New"));
    const defaultTheme = this.personalize.currentTheme;
    this.setTheme(defaultTheme);
  }

  setColor(color: SohoPersonalizationColor) {
    this.currentColor = color.name;
    this.personalize.colors = {
      header: color.value,
    };
  }

  setTheme(theme: SohoTheme) {
    this.currentTheme = theme.name;
    this.personalize.theme = theme.id;
  }
}
