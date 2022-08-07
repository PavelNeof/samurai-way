import {ActionTypes, DialogPageType} from "./store";

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
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

