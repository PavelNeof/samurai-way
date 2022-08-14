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



let mapStateToProps = (state:AppStateType) =>{
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch:Dispatch) =>{
    return{
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody: (body:string) => {
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;


/*

export type DialogsPropsType = {
    /!*state:{
        dialogs: Array<DialogItemPropsType>
        messages: Array<MessagePropsType>
        newMessageBody:string
        dispatch : (action:ActionTypes) => void
    }*!/
    // store: StoreType
    // dialogsPage: DialogPageType
}

const DialogsContainer = () => {
    return(
        <StoreContext.Consumer>
            {
                (store:StoreType) =>{
                    let state = store.getState().dialogsPage;

                    /!*let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
                    let messagesElements = state.messages.map(m => <Message message={m.message}/>);
                    let newMessageBody = props.dialogsPage.newMassageBody*!/

                    let onSendMessageClick = () => store.dispatch(sendMessageCreator());

                    let onNEwMessageChange = (body:string) => {
                        store.dispatch(updateNewMessageBodyCreator(body))
                    }

                    return (
                        <Dialogs updateNewMessageBody={onNEwMessageChange} sendMessage={onSendMessageClick} dialogsPage={state} />
                    )
                }
            }
        </StoreContext.Consumer>
    )

}
*/
