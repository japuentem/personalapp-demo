import { createReducer, on } from "@ngrx/store";
import { AppInitialState } from "../AppInitialState";
import { recoverPassword, recoverPasswordSuccess, recoverPasswordFail } from "./login.actions";
import { LoginState } from "./loginState";

const initialState: LoginState = AppInitialState.login;

const reducer = createReducer(initialState,
    on(recoverPassword, currentState => {
        return {
            ...currentState,
            error: null,
            isRecoveredPassword: false,
            isRecoveringPassword: true
        };
    }),
    on(recoverPasswordSuccess, currentState => {
        return {
            ...currentState,
            error: null,
            isRecoveredPassword: true,
            isRecoveringPassword: false
        };
    }),
    on(recoverPasswordFail, (currentState, action) => {
        return {
            ...currentState,
            error: action.error,
            isRecoveredPassword: false,
            isRecoveringPassword: false
        };
    })
)

export function loginReducer(state: LoginState, action){
    return reducer(state, action);
}