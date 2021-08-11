import { Component } from '@angular/core';
export interface Todo {
  id: number
  title: string
  completed: boolean
  date?: any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appTitle = 'Angular todo application'
  // title = 'ng-test';
  public todos: Todo [] = [
    { id: 1, title: 'to buy a bread', completed: false, date: new Date()},
    { id: 2, title: 'to buy an oil', completed: true, date: new Date()},
    { id: 1, title: 'to buy a beer', completed: false, date: new Date()},
  ]
}
