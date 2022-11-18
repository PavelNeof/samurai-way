import axios, {AxiosResponse} from "axios";
import {initialStateUsersType} from "../redux/users-reducer";

type getUsersType = {
        error: string | null
        items: initialStateUsersType[];
        totalCount: number
}
/*type usersAPIType = {
    getUsers(currentPage: number, pageSize: number): void;
    unfollow(useId: number): getUsersType
    follow(useId: number): getUsersType
}*/



export type usersAPIType = {
    getUsers: (currentPage: number, pageSize: number) =>  Promise<AxiosResponse<any, any>>;
    // getUsers: any;
    unfollow: (userId: number) => Promise<AxiosResponse<void>>;
    follow: (userId: number) => Promise<AxiosResponse<any, any>>;
    getProfile: (userId: number) => Promise<AxiosResponse<any, any>>;
}


export const usersAPI: usersAPIType = {
    getUsers(currentPage: number = 1, pageSize: number = 10): Promise<AxiosResponse<getUsersType>> {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    getProfile(userId:number){
        return profileAPI.getProfile(userId)
    }
}
export const authAPI = {
    me(){
        return  instance.get(`auth/me`)
    },
    login(email:string ,password:string,rememberMe:boolean){
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout(){
        return instance.delete(`auth/login`)
    }
}

export const profileAPI = {
    getProfile(userId:number){
        return instance.get(`profile/`+userId)
    },
    getStatus(userId:number){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status:string){
        return instance.put(`profile/status`, {status})
    },
    savePhoto(photoFile:string){
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
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