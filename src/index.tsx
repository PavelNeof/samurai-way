import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/redux-store";



    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App /*store={store} dispatch={store.dispatch.bind(store)}*//>
            </Provider>
        </BrowserRouter>
        , document.getElementById('root'));


/*export const rerenderEntireTree = (state: RootStateType) => {
}


rerenderEntireTree(store.getState())

/!*store.subscribe(() => rerenderEntireTree(store.getState()))*!/

store.subscribe(
    () => {
        let state = store.getState();
        rerenderEntireTree(state)
    }
)*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
/*serviceWorker.unregister();*/
