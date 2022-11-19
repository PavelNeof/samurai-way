import {MaxLengthCreator, required} from "../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../Common/FormsControls/FormsControls";
import React from "react";
import s from '../Dialogs.module.css'

const MaxLength50 = MaxLengthCreator(50)

export const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.addMessageForm}>
                <Field component={Textarea}
                       validate = {[required,MaxLength50]}
                       name="newMessageBody"
                       className={s.textArea}
                    // value={newMessageBody}
                    //    onChange={onNEwMessageChange}
                       placeholder={'Enter your text'}>
                </Field>
                <div className={s.buttonArea}>
                    <button className={'button'}>send</button>
                </div>
            </div>

        </form>
    )
}

export const AddMessageFromRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)