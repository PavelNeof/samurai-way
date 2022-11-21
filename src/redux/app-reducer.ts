import {Dispatch} from "redux";
import {AuthActionTypes, getAuthUserData} from "./auth-reducer";


type initialStateType = {
    initialized:boolean
    isEdit:boolean
}

export type AppActionTypes = ReturnType<typeof initializedSuccess> | ReturnType<typeof editModeAC>

let initialState: initialStateType = {
   initialized:false,
    isEdit:false
}

export const appReducer = (state: initialStateType = initialState, action: AppActionTypes): initialStateType => {
    switch (action.type) {
        case 'INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true
            }
        case "EDIT_MODE":
            return {...state, isEdit: action.isEdit};
        default:
            return state
    }

};

export const initializedSuccess = () => {
    return {
        type: 'INITIALIZED_SUCCESS'
    } as const
}

export const editModeAC = (isEdit: boolean) => ({
    type: "EDIT_MODE", isEdit
} as const)


export const initializedApp = () => (dispatch: Dispatch<AppActionTypes | any>) => {
    let promise = dispatch ( getAuthUserData())
    Promise.all([promise])
        .then(()=>{
                dispatch(initializedSuccess())
            }
        )
}