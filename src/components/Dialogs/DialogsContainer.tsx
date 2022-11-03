import {addMessageTC, DialogsPageStateType} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {RootState} from '../../redux/redux-store';
import {AnyAction, compose} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import React from 'react';
import {ThunkDispatch} from 'redux-thunk';

type mapStateToPropsType = {
    dialogsPage: DialogsPageStateType
}
type mapDispatchToPropsType = {
    addMessage: (newMessage:string) => void
}
export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: RootState): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): mapDispatchToPropsType => {
    return {
        addMessage: (newMessage:string) => dispatch(addMessageTC(newMessage))
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)