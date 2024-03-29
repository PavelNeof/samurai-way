
import {usersAPI, usersAPIType} from "../api/api";
import {Dispatch} from "redux";
import {AxiosResponse} from "axios";
import {AppStateType, AppThunkType} from "./redux-store";

export type initialStateType = {
    users: Array<initialStateUsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}


export type initialStateUsersType = {
    name: string
    id: number
    uniqueUrlName: string,
    photos: {
        small: string,
        large: string
    },
    status: boolean,
    followed: boolean
}


export type UsersActionTypes = ReturnType<typeof followSuccess> |
    ReturnType<typeof unfollowSuccess> | ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> | ReturnType<typeof setTotalUsersCount> |
    ReturnType<typeof toggleIsFetching> | ReturnType<typeof toggleFollowingProgress>


let initialState: initialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}


export const usersReducer = (state: initialStateType = initialState, action: UsersActionTypes): initialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state, users: state.users.map(u => {
                        if (u.id === action.UserID) {
                            return {...u, followed: true}
                        }
                        return u;
                    }
                )
            }
        case 'UNFOLLOW':
            return {
                ...state, users: state.users.map(u => {
                        if (u.id === action.UserID) {
                            return {...u, followed: false}
                        }
                        return u;
                    }
                )
            }
        case 'SET_USERS':
            return {
                ...state, users: action.users
            }
        case 'SET_CURRENT_PAGE':
            return {
                ...state, currentPage: action.currentPage
            }
        case 'SET_TOTAL_USERS_COUNT':
            return {
                ...state, totalUsersCount: action.count
            }
        case 'TOGGLE_IS_FETCHING':
            console.log('6')
            return {
                ...state, isFetching: action.isFetching
            }
        case 'TOGGLE_IS_FOLLOWING_PROGRESS':
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((id: number) => id != action.userId)

            }
        default:
            return state
    }

};

type DispatchThunkType = {

    //toggleIsFetching: (isFetching: boolean)=>{ type: 'TOGGLE_IS_FETCHING', isFetching: boolean}
    toggleIsFetching: { isFetching: boolean; type: "TOGGLE_IS_FETCHING" }
    setUsers: (users: Array<initialStateUsersType>) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

export const getUsersTC = (page: number, pageSize: number, friend?:boolean):AppThunkType => {
    return (dispatch ) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))
        usersAPI.getUsers(page, pageSize, friend).then(({data}) => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}

const followUnfollowFlow =
    async (dispatch: Dispatch<UsersActionTypes>, userId: number, apiMethod: () => Promise<AxiosResponse<any, void>>, actionCreator: ( UserID: number) => { UserID: number; type: "FOLLOW" | 'UNFOLLOW' }) => {
    dispatch(toggleFollowingProgress(true ,userId))
       try {
           let response = await apiMethod()
           if (response.data.resultCode === 0) {
               dispatch(actionCreator(userId))
           }
       } catch (e) {
        console.warn(e)
       } finally {
           dispatch(toggleFollowingProgress(false, userId))
       }
    }


export const follow = (userId:number)=>{
    return async (dispatch: Dispatch<UsersActionTypes>) =>{
        await followUnfollowFlow(dispatch, userId,() => usersAPI.follow(userId), followSuccess)
        // await usersAPI.follow(2)
        // dispatch(toggleFollowingProgress(true,userId))
        // usersAPI.follow(userId)
        //     .then(response => {
        //         if (response.data.resultCode === 0) {
        //             dispatch(followSuccess(userId))
        //             dispatch(toggleFollowingProgress(false,userId))
        //         }
        //     })

    }
}

export const unfollow = (userId:number)=>{
    return async (dispatch: Dispatch<UsersActionTypes>) =>{
         await followUnfollowFlow(dispatch, userId, () => usersAPI.unfollow(userId), unfollowSuccess )

        // dispatch(toggleFollowingProgress(true,userId))
        // usersAPI.unfollow(userId)
        //     .then(response => {
        //         if (response.data.resultCode === 0) {
        //             dispatch(unfollowSuccess(userId))
        //             dispatch(toggleFollowingProgress(false,userId))
        //         }
        //     })

    }
}



export const followSuccess = (UserID: number) => ({
    type: 'FOLLOW', UserID
} as const)
export const unfollowSuccess = (UserID: number) => ({
    type: 'UNFOLLOW', UserID
} as const)

export const setUsers = (users: Array<initialStateUsersType>) => ({
    type: 'SET_USERS', users
} as const)
export const setCurrentPage = (currentPage: number) => ({
    type: 'SET_CURRENT_PAGE', currentPage
} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: 'SET_TOTAL_USERS_COUNT', count: totalUsersCount
} as const)
export const toggleIsFetching = (isFetching: boolean) => ({
    type: 'TOGGLE_IS_FETCHING', isFetching
} as const)
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId
} as const)