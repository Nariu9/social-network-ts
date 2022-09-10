import {addMessageCreator, DialogsPageStateType, dialogsReducer} from './dialogs-reducer';

test('the message should be added to state', () => {

    const startState: DialogsPageStateType = {dialogs: [], messages: []}

    const endState = dialogsReducer(startState, addMessageCreator('Hello!'))

    expect(endState.messages[0]).toStrictEqual({id: 7, message: 'Hello!'})
})