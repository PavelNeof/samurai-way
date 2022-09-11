import axios, {AxiosResponse} from "axios";
import {initialStateUsersType} from "../redux/users-reducer";

type getUsersType = {
        error: string | null
        items: initialStateUsersType[];
        totalCount: number
}
type usersAPIType = {
    getUsers(currentPage: number, pageSize: number): void;
    unfollow(useId: number): getUsersType
    follow(useId: number): getUsersType
}


export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10): Promise<AxiosResponse<getUsersType>> {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    unfollow(userId: number) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    follow(userId: number) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    }
}

/*const getUsers = (currentPage: number = 1, pageSize: number = 10): getUsersType => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response=>{
            return response.data
        });
}*/

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": 'adde9436-0db1-4615-b59e-fd954f05d11c'
    }
})