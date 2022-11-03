import {addMessageAC, DialogsPageStateType, dialogsReducer} from './dialogs-reducer';

test('the message should be added to state', () => {

    const startState: DialogsPageStateType = {dialogs: [], messages: []}

    const endState = dialogsReducer(startState, addMessageAC('Hello!'))

    expect(endState.messages.length).toBe(1)
    expect(endState.messages[0].message).toBe('Hello!')
})