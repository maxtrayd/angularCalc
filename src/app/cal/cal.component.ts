import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.css']
})
export class CalComponent implements OnInit {
  public num1:number;
  public num2:number;
  public result:number;

  cal_plus(){
    this.result = this.num1 + this.num2;
  }
  cal_minus(){
    this.result = this.num1 - this.num2;
  }
  cal_multiply(){
    this.result = this.num1 * this.num2;
  }
  cal_divide(){
    this.result = this.num1 / this.num2;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
