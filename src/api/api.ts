import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'a3decdb3-48b2-455e-b07a-b72b7d94ecdb'
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    followUser(userId: number) {
        return instance.post<ResponseType>(`follow/${userId}`).then(response => response.data)
    },
    unfollowUser(userId: number) {
        return instance.delete<ResponseType>(`follow/${userId}`).then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`).then(response => response.data)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status}).then(response => response.data)
    }
}

export const authAPI = {
    getMe() {
        return instance.get(`auth/me`).then(response => response.data)
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post<ResponseType<{ userId: number }>>(`auth/login`, {
            email,
            password,
            rememberMe
        }).then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`).then(response => response.data)
    }
}

export type FollowUnfollowAPIMethodsType = typeof usersAPI.followUser | typeof usersAPI.unfollowUser

export type ResponseType<T = {}> = {
    data: T
    messages: string[]
    fieldsErrors: string[]
    resultCode: number
}