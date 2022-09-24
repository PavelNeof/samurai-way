import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
/*import {
    ActionTypes,
    DialogPageType,
    sendMessageCreator,
    StoreType,
    updateNewMessageBodyCreator
} from "../../redux/store";*/
import {Navigate} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {DialogPageType} from "../../redux/dialogs-reducer";

export type DialogsPropsType = {

    updateNewMessageBody: (body: string) => void
    sendMessage: (newMessageBody: string) => void
    dialogsPage: DialogPageType
    isAuth: boolean
}

const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = props.dialogsPage.newMassageBody


    // if (!props.isAuth) return <Navigate to={'/login'}/>

    let addNewMessage = (value:any)=>{
        props.sendMessage(value.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <AddMessageFromRedux onSubmit={addNewMessage}/>

        </div>

    )
}


export const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"}
                       name="newMessageBody"
                    // value={newMessageBody}
                    //    onChange={onNEwMessageChange}
                       placeholder={'Enter your text'}>
                </Field>
            </div>
            <div>
                <button>send</button>
            </div>
        </form>
    )
}

const AddMessageFromRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;