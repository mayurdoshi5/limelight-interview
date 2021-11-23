export namespace User {
    export class Initialize {
        public static readonly type: string = '[User] initialize';

        public constructor(public user: any) {}
    }

    export class GetUser {
        public static readonly type: string = '[User] Get';
    }

    export class clearUser {
        public static readonly type: string = '[Todo] Clear';
    }
}
