import {
    addPostCreator, deletePostAC,
    ProfilePageStateType,
    profileReducer,
    ProfileType,
    setUserProfile,
    setUserStatus
} from './profile-reducer';

let startState: ProfilePageStateType

beforeEach(() => {
    startState = {
        posts: [
            {id: 1, message: 'My first post', likesCount: 50},
            {id: 2, message: 'My second post', likesCount: 60},
        ],
        profile: null,
        status: ''
    }
})

test('correct post should be added to state', () => {
    const endState = profileReducer(startState, addPostCreator('My new post!'))

    expect(startState.posts.length).toBe(2)
    expect(endState.posts.length).toBe(3)
    expect(endState.posts[2]).toStrictEqual({id: 5, message: 'My new post!', likesCount: 0})
})

test('correct profile should be added to state', () => {

    const myProfile:ProfileType = {
        aboutMe: 'Hi, I\'m is Alan',
        contacts:{
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: 'https://github.com',
            mainLink: '',
        },
        lookingForAJob: true,
        lookingForAJobDescription: '',
        fullName: 'Alan Jameson',
        userId: 43,
        photos: {
            small: 'mySmallPhoto',
            large: ''
        }
    }

    const endState = profileReducer(startState, setUserProfile(myProfile))

    expect(endState.profile?.aboutMe).toBe('Hi, I\'m is Alan')
    expect(endState.profile?.contacts?.github).toBe('https://github.com')
    expect(endState.profile?.photos.small).toBe('mySmallPhoto')
})

test('correct status should be added to state', () => {
    const endState = profileReducer(startState, setUserStatus('Looking for a job!'))

    expect(endState.status).toBe('Looking for a job!')
})

test('posts length after deleting should be decremented', () => {
    const endState = profileReducer(startState, deletePostAC(1))

    expect(startState.posts.length).toBe(2)
    expect(endState.posts.length).toBe(1)
    expect(endState.posts[0]).toStrictEqual({id: 2, message: 'My second post', likesCount: 60})
})

test('posts length after deleting shouldn\'t be decremented if post id is incorrect', () => {
    const endState = profileReducer(startState, deletePostAC(125))

    expect(startState.posts.length).toBe(2)
    expect(endState.posts.length).toBe(2)
    expect(endState.posts[1]).toStrictEqual({id: 2, message: 'My second post', likesCount: 60})
})