import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {
    ActionTypes,
    DialogPageType, RootStateType,
    sendMessageCreator,
    StoreType,
    updateNewMessageBodyCreator
} from "../../redux/store";
import Dialogs from "./Dialogs";

import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type MapStateType = {
    dialogsPage: DialogPageType
   // isAuth: boolean
}

let mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        dialogsPage: state.dialogsPage,
       // isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
}
let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
