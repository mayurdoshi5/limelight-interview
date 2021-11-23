import { Component } from '@angular/core';
import { TodoModel } from '@lct/models/todo.model';
import { TodoState } from '@lct/store/todo.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Todo } from '@lct/store/todo.action';
import { FilterState } from '@lct/store/filter.state';
import { FilterTodo } from '@lct/store/filter.action';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
@Component({
    selector: 'outlet-todo',
    templateUrl: './outlet-todo.component.html',
    styleUrls: ['./outlet-todo.component.scss']
})
export class OutletTodoComponent {
    @Select(TodoState.todos)
    todos: Observable<any[]>;

    @Select(FilterState.getFilter)
    filter$: Observable<string>;

    constructor(private store: Store) { }

    toggleTodoCheckBox(todo: TodoModel) {
        this.store.dispatch(new Todo.ToggleTodo(todo));
    }

    updateFilterState(event: MatButtonToggleGroup) {
        this.store.dispatch(new FilterTodo(event.value));
    }

}
