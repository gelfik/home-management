import {combineReducers} from 'redux';
import {mainReducer} from "./main/reducers";
import {addressReducer} from "./address/reducers";
import {clientReducer} from "./client/reducers";
import {modalReducer} from "./modal/reducers";

export default combineReducers({
    mainReducer,
    addressReducer,
    clientReducer,
    modalReducer
})