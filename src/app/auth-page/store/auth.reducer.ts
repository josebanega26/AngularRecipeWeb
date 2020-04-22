import {User} from '../../shared/user.model'
import * as AuthActions from './auth.action'
export interface State{
    user: User
}
const initialState: State = {
user: null
}
export function AuthReducer(state: State = initialState, action: AuthActions.authActions) {
    switch(action.type){
        case AuthActions.LOGIN:
            console.log('log in with reducer')
            const expirationDate = new Date(new Date().getTime() + +action.payload.expiresIn * 1000);
            return {
                ...state,
                user: new User(
                    action.payload.email,
                    action.payload.localId,
                    action.payload.idToken,
                    expirationDate
                )
            }
        case AuthActions.LOGOUT:
            return {
                ...state,
                user: null
            }
        default: state
    }
}