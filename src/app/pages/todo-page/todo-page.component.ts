import { Component, OnInit } from '@angular/core';
import { TodoItem } from 'src/app/model/todo.model';
import { TodoItemService } from 'src/app/services/todo-item.service';
import { TodoItemInput } from 'src/app/todo-input/todo-input.component';

@Component({
    selector: 'app-todo-page',
    templateUrl: './todo-page.component.html',
    styleUrls: ['./todo-page.component.css'],
})
export class TodoPageComponent implements OnInit {
    todoItems: TodoItem[] = [];

    constructor(private todoService: TodoItemService) {
        console.log('constructor');
    }

    ngOnInit(): void {
        console.log('ngOnInit');
        this.todoItems = this.todoService.getTodoItems();
    }

    public onAdd(item: TodoItemInput) {
        this.todoItems.push({
            name: item.name,
            description: item.description,
            done: false,
            id: Math.random().toString(),
        });
    }

    public onComplete(id: string) {
        this.todoItems = this.todoItems.filter(item => item.id !== id);
    }
}
