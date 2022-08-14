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
  /*  let stateCopy = {...state,messages: [...state.messages]}*/
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            return { ...state, newMassageBody:action.body}

        case "SEND-MESSAGE":
            let body = state.newMassageBody;
            return {
                ...state,
                newMassageBody:'',
            messages: [...state.messages,{id: 6, message: body}]
            }
            /*stateCopy.newMassageBody = '';
            stateCopy.messages.push(
                {id: 6, message: body}
            );
             stateCopy */
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

