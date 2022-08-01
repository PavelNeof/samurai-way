import {ActionTypes, DialogPageType} from "./state";

let initialState = {
    dialogs: [],
    messages: [],
    newMassageBody: ''
}

export const dialogsReducer = (state: DialogPageType = initialState, action: ActionTypes): DialogPageType => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMassageBody = action.body
            return {...state}
        case "SEND-MESSAGE":
            let body = state.newMassageBody;
            state.newMassageBody = '';
            state.messages.push(
                {id: 6, message: body}
            );
            return {...state}
        default:
            return state
    }
}
/* if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
     state.newMassageBody = action.body;
     /!*this._callSubscriber()*!/*/
/* } else if (action.type === 'SEND-MESSAGE') {
     let body = state.newMassageBody;
     state.newMassageBody = '';
     state.messages.push(
         {id: 6, message: body}
     );*/

