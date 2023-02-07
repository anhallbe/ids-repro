import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SohoComponentsModule } from "ids-enterprise-ng";
import { firstValueFrom, timer } from "rxjs";

@Component({
  selector: "app-busy-widget",
  standalone: true,
  imports: [CommonModule, FormsModule, SohoComponentsModule],
  templateUrl: "./busy-widget.component.html",
  styleUrls: ["./busy-widget.component.css"],
})
export class BusyWidgetComponent {
  busy = false;
  fruits = FRUITS;
  query: string;

  async makeBusy(seconds = 0) {
    this.busy = true;
    await this.delay(1000 * seconds);
    this.busy = false;
  }

  async search(): Promise<void> {
    this.busy = true;
    this.fruits = FRUITS.filter((fruit) => fruit.includes(this.query));
    await this.delay();
    this.busy = false;
    this.busy = false;
  }

  private delay(ms = 1000): Promise<unknown> {
    return firstValueFrom(timer(ms));
  }
}

const FRUITS: readonly string[] = [
  "apple",
  "banana",
  "orange",
  "grape",
  "pineapple",
  "melon",
  "lemon",
  "lime",
];
