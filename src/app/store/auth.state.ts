import { Action, Selector, State, StateContext } from "@ngxs/store";
import { LogIn, LogOut } from "./auth.action";

interface AuthStateModel {
    loggedIn: boolean;
    userName: string;
}
type authContext = StateContext<AuthStateModel>;
@State<AuthStateModel>({
    name: 'auth',
    defaults: {
        loggedIn: false,
        userName: null
    }
})
export class AuthState {

    @Selector()
    static getAuthenticated(state: AuthStateModel) {
        return state.loggedIn;
    }

    @Selector()
    static getUser(state: AuthStateModel) {
        return state.userName;
    }


    @Action(LogIn)
    logIn(ctx: authContext, { userName }: LogIn) {

        ctx.patchState({
            loggedIn: true,
            userName: userName
        });
    }

    @Action(LogOut)
    logOut(ctx: authContext) {
        ctx.patchState({
            loggedIn: false,
            userName: null
        });
    }
}