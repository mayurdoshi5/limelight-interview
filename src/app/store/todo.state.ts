import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { TodoModel } from '@lct/models/todo.model';
import { Todo } from '@lct/store/todo.action';

interface TodoStateModel extends TodoModel {
}

type TodoContext = StateContext<TodoStateModel>;

@State<TodoStateModel[]>({
    name: 'todos',
    defaults: []
})

@Injectable()
export class TodoState {


    @Action(Todo.Initialize)
    public initialize(ctx: TodoContext, action: Todo.Initialize): void {

    }
}
