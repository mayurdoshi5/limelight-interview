import { Component } from '@angular/core';
import { TodoModel } from '@lct/models/todo.model';
import { TodoState } from '@lct/store/todo.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Todo } from '@lct/store/todo.action';
@Component({
    selector: 'outlet-todo',
    templateUrl: './outlet-todo.component.html',
    styleUrls: ['./outlet-todo.component.scss']
})
export class OutletTodoComponent {
    @Select(TodoState.todos)
    todos: Observable<any[]>;

    filter = 'All';

    constructor(private store: Store) { }

    toggleTodoCheckBox(todo: TodoModel) {
        this.store.dispatch(new Todo.ToggleTodo(todo));
    }


}
