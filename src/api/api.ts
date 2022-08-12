import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '219ce503-db19-4440-86cc-f93419479856'
    }
})

export const usersAPI = {
    getUsers (currentPage: number = 1, pageSize: number = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    followUser (userId: number) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    },
    unfollowUser (userId: number) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    },
    getProfile (userId: string) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    }
}

export const authAPI = {
    getMe () {
        return instance.get(`auth/me`).then(response => response.data)
    },
}