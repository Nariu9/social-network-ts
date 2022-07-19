export type LocationType = {
    city: string
    country: string
}
export type UserType = {
    id: number
    photos: {
        small: string
        large: string
    }
    followed: boolean
    name: string
    status: string
    location?: LocationType
}
export type UsersPageStateType = {
    users: UserType[]
}

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState: UsersPageStateType = {
    users: []
}

export const usersReducer = (state: UsersPageStateType = initialState, action: UsersActionsType): UsersPageStateType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)}
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}

export type UsersActionsType =
    ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>

export const followAC = (userID: number) => ({type: FOLLOW, userID}) as const
export const unfollowAC = (userID: number) => ({type: UNFOLLOW, userID}) as const
export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, users}) as const