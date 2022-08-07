import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem, {DialogItemPropsType} from "./DialogItem/DialogItem";
import Message, {MessagePropsType} from "./Message/Message";
import {
    ActionTypes,
    DialogPageType,
    sendMessageCreator,
    StoreType,
    updateNewMessageBodyCreator
} from "../../redux/store";
import Dialogs from "./Dialogs";
import StoreContext from '../../storeContext';

export type DialogsPropsType = {
    /*state:{
        dialogs: Array<DialogItemPropsType>
        messages: Array<MessagePropsType>
        newMessageBody:string
        dispatch : (action:ActionTypes) => void
    }*/
   // store: StoreType
   // dialogsPage: DialogPageType
}

const DialogsContainer = () => {
    return(
        <StoreContext.Consumer>
            {
                (store:StoreType) =>{
                   let state = store.getState().dialogsPage;

                    /*let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
                    let messagesElements = state.messages.map(m => <Message message={m.message}/>);
                    let newMessageBody = props.dialogsPage.newMassageBody*/

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

export default DialogsContainer;