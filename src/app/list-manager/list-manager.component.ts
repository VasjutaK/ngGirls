import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list-manager',
  template: `
    <h1>
    {{title}}
    </h1>
      <todo-input (submitValue)="addItem($event)"> </todo-input>
    <ul>
    <li *ngFor="let item of todoList">
      <todo-item [todoItem]="item"> </todo-item>
    </li>
  </ul>
  `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  title = 'todo works!';
  todoList = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];

  addItem(inputtitle: string): void {    
    this.todoList.push({ title:inputtitle });
  }
  constructor() { }

  ngOnInit() {
  }

}