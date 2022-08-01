import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
/*/!*import * as serviceWorker from './serviceWorker';*!/*/
import state, {RootStateType/*, subscribe, updateNewPostText*/} from './redux/state';
/*import {addPost} from "./redux/state";*/
import store from "./redux/state";
/*import {rerenderEntireTree} from "./render";*/


export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(<App store={store} dispatch={store.dispatch.bind(store)
        }/>
        , document.getElementById('root'));
}


rerenderEntireTree(store.getState())

store.subscribe(() => rerenderEntireTree(store.getState()))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
/*serviceWorker.unregister();*/
