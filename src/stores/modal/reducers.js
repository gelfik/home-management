import {
    MODAL_CREATE_CLIENT_CLOSE,
    MODAL_CREATE_CLIENT_OPEN,
    MODAL_DELETE_CLIENT_CLOSE,
    MODAL_DELETE_CLIENT_OPEN, MODAL_EDIT_CLIENT_CLOSE, MODAL_EDIT_CLIENT_OPEN
} from "./actions";

const defaultState = {
    modalCreateClientStatus: false,
    modalDeleteClientStatus: false,
    modalEditClientStatus: false,
}

export const modalReducer = (state = defaultState, action) => {
    switch (action.type) {
        case MODAL_CREATE_CLIENT_OPEN:
            return {
                ...state,
                modalCreateClientStatus: action.payload,
            }
        case MODAL_CREATE_CLIENT_CLOSE:
            return {
                ...state,
                modalCreateClientStatus: action.payload,
            }
        case MODAL_DELETE_CLIENT_OPEN:
            return {
                ...state,
                modalDeleteClientStatus: action.payload,
            }
        case MODAL_DELETE_CLIENT_CLOSE:
            return {
                ...state,
                modalDeleteClientStatus: action.payload,
            }
        case MODAL_EDIT_CLIENT_OPEN:
            return {
                ...state,
                modalEditClientStatus: action.payload,
            }
        case MODAL_EDIT_CLIENT_CLOSE:
            return {
                ...state,
                modalEditClientStatus: action.payload,
            }
        default:
            return state
    }
}