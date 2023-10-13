import { Injectable } from '@angular/core';
import { TodoItem } from '../model/todo.model';

@Injectable({
    providedIn: 'root',
})
export class TodoItemService {
    todoItems: TodoItem[] = [
        {
            id: '1',
            name: 'Buy Milk',
            description: 'Go to the store and buy milk',
            done: false,
        },
        {
            id: '2',
            name: 'Buy Bread',
            description: 'Go to the store and buy bread',
            done: false,
        },
        {
            id: '3',
            name: 'Buy Eggs',
            description: 'Go to the store and buy eggs',
            done: false,
        },
    ];


    public getTodoItems() : TodoItem[] {
        return [...this.todoItems];
    }


    // add todo
    public addTodoItem(item: TodoItem) {
        this.todoItems.push(item);
    }

    // delete todo
    public deleteTodoItem(id: string) {
        this.todoItems = this.todoItems.filter(item => item.id !== id);
    }
}
