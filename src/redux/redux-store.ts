import {applyMiddleware, combineReducers, createStore} from "redux";
import {ProfileActionTypes, profileReducer} from "./profile-reducer";
import {DialogActionTypes, dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {UsersActionTypes, usersReducer} from "./users-reducer";
import {AuthActionTypes, authReducer} from "./auth-reducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import {AppActionTypes, appReducer} from "./app-reducer";

let reducers = combineReducers({
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sidebar: sidebarReducer,
        usersPage: usersReducer,
        auth: authReducer,
        form: formReducer,
        app: appReducer
    }
)

//export type AppStateType = ReturnType<typeof reducers>


export type AppStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = ThunkDispatch<AppStateType, unknown, AppActionsType>;
export type AppThunkType<ReturnType = void> = ThunkAction<
    ReturnType,
    AppStateType,
    unknown,
    AppActionsType
    >;

export type AppActionsType =
    | ProfileActionTypes
|DialogActionTypes
|UsersActionTypes
|AuthActionTypes
|AppActionTypes

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store;

export default store;
