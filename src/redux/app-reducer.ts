import {Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";


type initialStateType = {
    initialized:boolean

}

export type AppActionTypes = ReturnType<typeof initializedSuccess>

let initialState: initialStateType = {
   initialized:false,

}

export const appReducer = (state: initialStateType = initialState, action: AppActionTypes): initialStateType => {
    switch (action.type) {
        case 'INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }

};

export const initializedSuccess = () => {
    return {
        type: 'INITIALIZED_SUCCESS'
    } as const
}

export const initializedApp = () => (dispatch: Dispatch<AppActionTypes | any>) => {
    let promise = dispatch ( getAuthUserData())
    Promise.all([promise])
        .then(()=>{
                dispatch(initializedSuccess())
            }
        )
}