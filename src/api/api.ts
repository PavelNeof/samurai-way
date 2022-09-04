import axios from "axios";
import {initialStateUsersType} from "../redux/users-reducer";

type getUsersType = {
    then(param: (data: {
            items: initialStateUsersType[];
            totalCount: number
    }) => void): void;
}
type usersAPIType = {
    getUsers(currentPage: number, pageSize: number): getUsersType;
}


export const usersAPI:usersAPIType = {
    getUsers (currentPage: number = 1, pageSize: number = 10): getUsersType {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response=>{
                return response.data
            });
    }
}

/*const getUsers = (currentPage: number = 1, pageSize: number = 10): getUsersType => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response=>{
            return response.data
        });
}*/

const instance = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY":'adde9436-0db1-4615-b59e-fd954f05d11c'
    }
})