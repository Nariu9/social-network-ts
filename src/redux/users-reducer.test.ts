import {
    followSuccess,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollowingProgress,
    toggleIsFetching,
    unfollowSuccess,
    UsersPageStateType,
    usersReducer,
    UserType
} from './users-reducer';

let startState: UsersPageStateType

beforeEach(() => {
    startState = {
        users: [{
            id: 1,
            photos: {small: 'small photo', large: 'large photo'},
            followed: false,
            name: 'Alan',
            status: 'Hi everyone!'
        },
            {
                id: 2,
                photos: {small: 'small photo', large: 'large photo'},
                followed: true,
                name: 'Kate',
                status: 'Hello there!'
            }],
        pageSize: 5,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: []
    }
})

test('correct user should be followed', () => {
    const endState = usersReducer(startState, followSuccess(1))

    expect(endState.users[0].followed).toBe(true)
    expect(endState.users[1].followed).toBe(true)
})

test('correct user should be unfollowed', () => {
    const endState = usersReducer(startState, unfollowSuccess(2))

    expect(endState.users[1].followed).toBe(false)
    expect(endState.users[0].followed).toBe(false)
})

test('users should be set to state', () => {
    const users: UserType[] = [{
        id: 3,
        photos: {small: 'small photo', large: 'large photo'},
        followed: false,
        name: 'Mike',
        status: 'How are you today?'
    },
        {
            id: 4,
            photos: {small: 'small photo', large: 'large photo'},
            followed: false,
            name: 'Hannah',
            status: 'It is magnificent!'
        }]

    const endState = usersReducer(startState, setUsers(users))

    expect(endState.users[0].name).toBe('Mike')
    expect(endState.users[1].id).toBe(4)
})

test('correct current page should be set to state', () => {
    const endState = usersReducer(startState, setCurrentPage(5))

    expect(startState.currentPage).toBe(1)
    expect(endState.currentPage).toBe(5)
})

test('total users count should be set to state', () => {
    const endState = usersReducer(startState, setTotalUsersCount(25000))

    expect(startState.totalUsersCount).toBe(0)
    expect(endState.totalUsersCount).toBe(25000)
})

test('prop isFetching should be toggled', () => {
    const endState = usersReducer(startState, toggleIsFetching(true))

    expect(startState.isFetching).toBe(false)
    expect(endState.isFetching).toBe(true)
})

test('prop followingInProgress should contain correct user id', () => {
    const endState = usersReducer(startState, toggleFollowingProgress(true, 5))

    expect(startState.followingInProgress).toStrictEqual([])
    expect(endState.followingInProgress).not.toStrictEqual([4])
    expect(endState.followingInProgress).toStrictEqual([5])
})