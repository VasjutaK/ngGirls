import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
  <input [value]="title"
         (keyup.enter)="changeTitle(inputValue)"
         #inputValue>
  <button (click)="changeTitle(inputValue)">
    Save
  </button>
  <!--<p>The title is: {{ title }}</p> -->
   `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  title: string = '';
  @Output() submitValue: EventEmitter<string> = new EventEmitter();

  constructor() { 
    /*this.title = 'My Title'; //'this' used for referencing a member of the class from within a class method
    //this.changeTitle('New title');
    console.log('Logs for constructor:', this.title);*/
  }

  ngOnInit() {
    /*setTimeout(() => {
      this.title = 'This is not the title you are looking for';  
    }, 3000);*/
  }

  //method that changes the value of 'title' according to the argument we will pass.
  changeTitle(inputValueReference): void {
    console.log('New value:', inputValueReference);
    this.title = inputValueReference.value;
    this.submitValue.emit(inputValueReference.value);
  }

 
}
