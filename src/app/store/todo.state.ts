import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { TodoModel } from '@lct/models/todo.model';
import { Todo } from '@lct/store/todo.action';
import { ApiService } from '@lct/api/api.service';
import { first, tap } from 'rxjs/operators';

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

    constructor(private _apiService: ApiService) { }

    @Action(Todo.Initialize)
    public initialize(ctx: TodoContext, action: Todo.Initialize) {
        const state = ctx.getState();
        if (state.todos.length > 0) {
            ctx.setState({
                ...state,
                todos: [...[], ...state.todos]
            });
        } else {
            return this._apiService.get('/todos').pipe(first(), tap((res: TodoModel[]) => {
                res.forEach(d => d.completed ? d.completedDate = randomDate(new Date(2012, 0, 1), new Date()) : d.completedDate = null)
                ctx.setState({
                    ...state,
                    todos: [...[], ...res]
                });
            }));
        }
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
        });
    }

    @Action(Todo.clearTodo)
    clearTodo(ctx: StateContext<TodoStateModel>, action: Todo.ToggleTodo) {
        ctx.patchState({
            todos: []
        });
    }
}
function randomDate(start: Date, end: Date): Date {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

