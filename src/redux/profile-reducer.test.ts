import {
    addPostAC, deletePostAC,
    ProfilePageStateType,
    profileReducer,
    ProfileType,
    setUserProfile,
    setUserStatus
} from './profile-reducer';
import {v1} from 'uuid';

let startState: ProfilePageStateType
let postId1 = v1()
let postId2 = v1()


beforeEach(() => {
    startState = {
        posts: [
            {id: postId1, message: 'My first post', likesCount: 50},
            {id: postId2, message: 'My second post', likesCount: 60},
        ],
        profile: null,
        status: ''
    }
})

test('correct post should be added to state', () => {
    const endState = profileReducer(startState, addPostAC('My new post!'))

    expect(startState.posts.length).toBe(2)
    expect(endState.posts.length).toBe(3)
    expect(endState.posts[2]).toStrictEqual({id: v1(), message: 'My new post!', likesCount: 0})
})

test('correct profile should be added to state', () => {

    const myProfile: ProfileType = {
        aboutMe: 'Hi, I\'m is Alan',
        contacts: {
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
    expect(endState.profile?.photos?.small).toBe('mySmallPhoto')
})

test('correct status should be added to state', () => {
    const endState = profileReducer(startState, setUserStatus('Looking for a job!'))

    expect(endState.status).toBe('Looking for a job!')
})

test('posts length after deleting should be decremented', () => {
    const endState = profileReducer(startState, deletePostAC(postId1))

    expect(startState.posts.length).toBe(2)
    expect(endState.posts.length).toBe(1)
    expect(endState.posts[0]).toStrictEqual({id: postId2, message: 'My second post', likesCount: 60})
})

test('posts length after deleting shouldn\'t be decremented if post id is incorrect', () => {
    const endState = profileReducer(startState, deletePostAC(v1()))

    expect(startState.posts.length).toBe(2)
    expect(endState.posts.length).toBe(2)
    expect(endState.posts[1]).toStrictEqual({id: postId2, message: 'My second post', likesCount: 60})
})