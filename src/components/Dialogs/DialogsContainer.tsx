import React from "react";
import {addMessageCreator, DialogsPageStateType, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ReduxStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


type mapStateToPropsType = {
    dialogsPage: DialogsPageStateType
}

type mapDispatchToPropsType = {
    updateNewMessageText: (text: string) => void
    addMessage: () => void
}

const mapStateToProps = (state: ReduxStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        updateNewMessageText: (text: string) => {
            dispatch(updateNewMessageTextCreator(text))
        },
        addMessage: () => {
            dispatch(addMessageCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer