import { Component, EventEmitter, Output } from '@angular/core';
import { TodoItemService } from '../services/todo-item.service';

export interface TodoItemInput {
  name: string;
  description: string;
}

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent {

  public name: string = '';
  public description: string = '';

  @Output() onAddClickEvent: EventEmitter<TodoItemInput> = new EventEmitter<TodoItemInput>();

  constructor(private todoService: TodoItemService) { }

  // use the todoService to add the item
  public onAddClick() {
    this.onAddClickEvent.emit({
      name: this.name,
      description: this.description,
    });
  }

}
