import {appReducer, AppStateType, initializedSuccess} from './app-reducer';

test('initialized status should be changed to true', () => {
    const startState: AppStateType = {initialized: false}

    const endState = appReducer(startState, initializedSuccess())

    expect(endState.initialized).toBe(true)
})