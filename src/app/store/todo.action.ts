import { TodoModel } from "@lct/models/todo.model";

export namespace Todo {
    export class Initialize {
        public static readonly type: string = '[Todo] initialize';

        public constructor(public todos: any[]) {
        }
    }

    export class ToggleTodo {
        static readonly type = '[TODO] Toggle';

        constructor(public payload: TodoModel) { }
    }

    export class clearTodo {
        public static readonly type: string = '[Todo] Clear';
    }
}
