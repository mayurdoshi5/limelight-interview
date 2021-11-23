import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { UserModel } from '@lct/models/user.model';
import { User } from '@lct/store/user.actions';
import { IUserInfo } from '@lct/models/userinfo.model';

interface UserStateModel extends UserModel, IUserInfo {}

type UserContext = StateContext<UserStateModel>;

@State<UserStateModel>({
    name: 'user',
    defaults: {
        id: -1,
        name: '',
        phone: '',
        username: '',
        email: ''
    }
})

@Injectable()
export class UserState {


    @Action(User.Initialize)
    public initialize(ctx: UserContext, action: User.Initialize): void {
        ctx.setState(action.user);
    }

    @Selector()
    static getUserData(state: UserStateModel) {
        return state;
    }

   @Action(User.clearUser)
   clearUser(ctx: UserContext, action: User.Initialize) {
      ctx.setState({
          id: -1,
          name: '',
          phone: '',
          username: '',
          email: ''
      });
   }
}


