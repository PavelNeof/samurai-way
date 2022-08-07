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

export type DialogsPropsType = {
    /*state:{
        dialogs: Array<DialogItemPropsType>
        messages: Array<MessagePropsType>
        newMessageBody:string
        dispatch : (action:ActionTypes) => void
    }*/
   /* store: StoreType
    dialogsPage: DialogPageType*/
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
    dialogsPage: DialogPageType

}

const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = props.dialogsPage.newMassageBody

    let onSendMessageClick = () => props.sendMessage();

    let onNEwMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>

            <div>
                <textarea value={newMessageBody}
                          onChange={onNEwMessageChange}
                          placeholder={'Enter your text'}>
                </textarea>
            </div>
            <div>
                <button onClick={onSendMessageClick}>send</button>
            </div>
        </div>

    )
}

export default Dialogs;