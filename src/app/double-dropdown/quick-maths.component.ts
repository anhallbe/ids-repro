import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-maths',
  templateUrl: './quick-maths.component.html',
  styleUrls: ['./quick-maths.component.css']
})
export class QuickMathsComponent implements OnInit {

  optionActivated: boolean = false;
  firstSelection: number = 1;
  secondSelection: number = 1;
  multiplier: number = 0;
  result: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  calculate() {
    const multiplierAsNumber = Number(this.multiplier);
    this.result = (this.firstSelection + this.secondSelection) * multiplierAsNumber;
  }


}
