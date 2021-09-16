export namespace Todo {
    export class Initialize {
        public static readonly type: string = '[Todo] initialize';

        public constructor(public todos: any[]) {
        }
    }
}
