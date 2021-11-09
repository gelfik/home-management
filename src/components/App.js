import React from 'react'
import PageService from "../services/page-service";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import RootReducer from '../stores/reducers';
import thunkMiddleware from 'redux-thunk'
import {RequestsServiceProvider} from "./context/requests-service-context";
import RequestsService from "../services/requests-service";

const logMiddleware = () => (next) => (action) => {
    console.log(action.type)
    return next(action)
}

const store = createStore(RootReducer, applyMiddleware(thunkMiddleware, logMiddleware))
const requestsService = new RequestsService()

const App = () => {

    return (
        <Provider store={store}>
            <RequestsServiceProvider value={requestsService}>
                <PageService/>
            </RequestsServiceProvider>
        </Provider>
    );
}

export default App;