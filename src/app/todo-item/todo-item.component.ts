import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItemService } from '../services/todo-item.service';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
    @Input() id: string = '';
    @Input() name: string = '';
    @Input() description: string = '';

    @Output() onDoneClickEvent: EventEmitter<string> = new EventEmitter<string>();

    constructor(private todoService: TodoItemService) {}

    // use the todoService to mark the item as done (remove)

    public onCompleteClick(id: string) {
        this.onDoneClickEvent.emit(id);
    }
}
