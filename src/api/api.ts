import axios, {AxiosResponse} from "axios";
import {initialStateUsersType} from "../redux/users-reducer";
import {ProfileApiType, ProfileDataType} from "../components/Profile/ProfileInfo/ProfileDataForm";

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
    getUsers: (currentPage: number, pageSize: number, friend?:boolean) =>  Promise<AxiosResponse<any, any>>;
    // getUsers: any;
    unfollow: (userId: number) => Promise<AxiosResponse<void>>;
    follow: (userId: number) => Promise<AxiosResponse<any, any>>;
    getProfile: (userId: number) => Promise<AxiosResponse<any, any>>;
}


export const usersAPI: usersAPIType = {
    getUsers(currentPage: number = 1, pageSize: number = 10, friend?:boolean): Promise<AxiosResponse<getUsersType>> {
        return instance.get(`users?page=${currentPage}&count=${pageSize}&friend=${friend}`)
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
    login(email:string ,password:string,rememberMe:boolean, captcha : any){
        return instance.post(`auth/login`, {email, password, rememberMe,captcha})
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
    saveProfile(profile:ProfileApiType){
        return instance.put(`profile`, profile)
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

export const securityAPI = {
    getCaptchaURL(){
        return  instance.get(`security/get-captcha-url`)
    }
}



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": 'b4d61454-80c1-4be7-94ee-708cd21d8d6c'
    }
})