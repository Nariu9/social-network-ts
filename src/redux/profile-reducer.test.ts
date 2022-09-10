import {
    addPostCreator,
    ProfilePageStateType,
    profileReducer,
    ProfileType,
    setUserProfile,
    setUserStatus
} from './profile-reducer';

let startState: ProfilePageStateType

beforeEach(() => {
    startState = {
        posts: [],
        profile: null,
        status: ''
    }
})

test('correct post should be added to state', () => {
    const endState = profileReducer(startState, addPostCreator('My new post!'))

    expect(endState.posts[0]).toStrictEqual({id: 5, message: 'My new post!', likesCount: 0})
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
    expect(endState.profile?.contacts.github).toBe('https://github.com')
    expect(endState.profile?.photos.small).toBe('mySmallPhoto')
})

test('correct status should be added to state', () => {
    const endState = profileReducer(startState, setUserStatus('Looking for a job!'))

    expect(endState.status).toBe('Looking for a job!')
})