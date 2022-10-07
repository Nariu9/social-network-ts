import {authReducer, AuthStateType, setAuthUserData} from './auth-reducer';

test('user data should be set to state', () => {

    const startState: AuthStateType = {id: null, login: null, email: null, isAuth: false, captchaUrl: null}

    const endState = authReducer(startState, setAuthUserData(1, 'John', 'email@email.com', true))

    expect(endState.id).toBe(1)
    expect(endState.login).toBe('John')
    expect(endState.email).toBe('email@email.com')
    expect(endState.isAuth).toBe(true)
})