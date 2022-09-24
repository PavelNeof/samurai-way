import React from 'react';
import s from './Dialogs.module.css';

import Dialogs from "./Dialogs";

import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {DialogPageType, sendMessageCreator} from "../../redux/dialogs-reducer";


type MapStateType = {
    dialogsPage: DialogPageType

}

let mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        dialogsPage: state.dialogsPage,

    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        sendMessage: (newMessageBody:string) => {
            dispatch(sendMessageCreator(newMessageBody))
        }

    }
}
//let AuthRedirectComponent = withAuthRedirect(Dialogs)

//const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

//export default DialogsContainer;
export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(Dialogs)