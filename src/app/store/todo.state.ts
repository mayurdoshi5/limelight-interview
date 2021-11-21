import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { TodoModel } from '@lct/models/todo.model';
import { Todo } from '@lct/store/todo.action';

interface TodoStateModel {
    todos: TodoModel[]
}

type TodoContext = StateContext<TodoStateModel>;

@State<TodoStateModel>({
    name: 'todos',
    defaults: {
        todos: []
    }
})

@Injectable()
export class TodoState {


    @Action(Todo.Initialize)
    public initialize(ctx: TodoContext, action: Todo.Initialize): void {
        const state = ctx.getState();
        ctx.setState({
           ...state,
          todos: action.todos
        });
    }

    @Selector()
    static todos(state: TodoStateModel): any[] {
        return state.todos;
    }

    @Selector()
    static incompleteTodo(state: TodoStateModel): number {
        return state.todos.filter(todo => !todo.completed).length;
    }

    @Action(Todo.ToggleTodo)
    toggleTodo(ctx: StateContext<TodoStateModel>, action: Todo.ToggleTodo) {
        const todo = action.payload;
        todo.completed = !todo.completed;
        if (todo.completed) {
            todo.completedDate = new Date();
        } else {
            todo.completedDate = null;
        }
        ctx.patchState({
            todos: [...ctx.getState().todos]
        })
    }
}
