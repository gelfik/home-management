import {
    CLIENT_ACTIVE,
    CLIENT_LOAD_LIST, CLIENT_LOADING, CLIENT_SET_CLIENT, CLIENT_SET_ERROR,
} from "./actions";

const defaultState = {
    loading: true,
    error: null,

    clientList: [],
    client: null,
    clientActive: false,

    createClient: null
}

export const clientReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CLIENT_LOAD_LIST:
            return {
                ...state,
                clientList: action.payload,
                client: null,
                loading: false,
                error: null,
                clientActive: true,
            }
        case CLIENT_LOADING:
            return {
                ...state,
                loading: action.payload,
            }
        case CLIENT_ACTIVE:
            return {
                ...state,
                clientActive: action.payload,
            }
        case CLIENT_SET_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        case CLIENT_SET_CLIENT:
            const clientID = action.payload;
            const client = state.clientList.find((item) => item.id === clientID)
            return {
                ...state,
                client: client,
            }
        default:
            return state
    }
}