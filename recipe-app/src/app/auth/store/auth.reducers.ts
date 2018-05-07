import * as authAction from './auth.actions';

export interface State{
  token: string,
  authenticated: boolean
}

const initialState: State = {
    token: null,
    authenticated: false
};

export function authReducer(state = initialState, action: authAction.AuthActions){
  switch(action.type){
    case(authAction.SIGNUP):
    case (authAction.SIGNIN):
      return {
        ...state,
        authenticated: true
      };
    case (authAction.LOGOUT):
      return {
        ...state,
        token: null,
        authenticated: false
      };
    case (authAction.SET_TOKEN):
      return {
        ...state,
        token: action.payload
      };
    default:
      return state;
  }
}
