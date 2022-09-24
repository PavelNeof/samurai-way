import {MaxLengthCreator, required} from "../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../Common/FormsControls/FormsControls";
import React from "react";

const MaxLength50 = MaxLengthCreator(50)

export const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate = {[required,MaxLength50]}
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

export const AddMessageFromRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)