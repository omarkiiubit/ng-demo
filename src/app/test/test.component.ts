import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template:`
    <h2>
      Welcome {{name}}
    </h2>
    
    <h2 class="text-success">
      Codevolution
    </h2>

    <h2 [class]="successClass">
      Omar
    </h2>
    <h2 class="text-special" [class]="successClass">
      special text
    </h2>

    <h2 [class.text-danger]="hasError">
      error text
    </h2>

    <h2 [class.text-danger]="hasError">
      error text
    </h2>

    <h2 [ngClass]="messageClasses">
      message classes test
    </h2>

    <h2 [ngClass]="messageClasses">
      {{testVar}}
    </h2>
  `,
  styles:[`
    .text-success{
      color:green;
    }
    .text-danger{
      color:red;
    }
    .text-special{
      font-style: italic;
    }
  `]
})
export class TestComponent implements OnInit {
  testVar: string = "Omar trevino";
  public name = "Omar";
  public myId = "testId";
  public isDisabled = true;
  public successClass = "text-success";
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello " + this.name;
  }
}
