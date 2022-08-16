import {addMessageCreator, DialogsPageStateType, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ReduxStateType} from "../../redux/redux-store";
import {compose, Dispatch} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import React from 'react';

type mapStateToPropsType = {
    dialogsPage: DialogsPageStateType
}
type mapDispatchToPropsType = {
    updateNewMessageText: (text: string) => void
    addMessage: () => void
}
export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: ReduxStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        updateNewMessageText: (text: string) => dispatch(updateNewMessageTextCreator(text)),
        addMessage: () => dispatch(addMessageCreator())
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)