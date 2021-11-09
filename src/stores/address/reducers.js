import {
    STREETS_SET_STREET, STREETS_LOAD_LIST, STREETS_SET_ERROR,
    HOUSES_SET_HOUSE, HOUSES_LOAD_LIST, HOUSES_SET_ERROR,
    FLATS_SET_FLAT, FLATS_LOAD_LIST, FLATS_SET_ERROR, ADDRESS_LOADING
} from "./actions";

const defaultState = {
    loading: true,
    error: null,

    streetsList: [],
    street: null,

    housesList: [],
    house: null,
    houseSelectStatus: true,

    flatsList: [],
    flat: null,
    flatSelectStatus: true
}

export const addressReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADDRESS_LOADING:
            return {
                ...state,
                loading: action.payload,
            }
        case STREETS_SET_STREET:
            const streetID = action.payload?.value;
            const street = state.streetsList.find((item) => item.id === streetID)
            return {
                ...state,
                street: street,
                loading: false,
                error: null,
                houseSelectStatus: false
            }
        case STREETS_LOAD_LIST:
            return {
                ...state,
                streetsList: action.payload,
                street: null,
                housesList: [],
                house: null,
                flatList: [],
                flat: null,
                loading: false,
                error: null,
                houseSelectStatus: true
            }
        case STREETS_SET_ERROR:
            return {
                ...state,
                streetsList: [],
                street: null,
                housesList: [],
                house: null,
                error: action.payload,
                loading: false,
                houseSelectStatus: true
            }

        case HOUSES_SET_HOUSE:
            const houseID = action.payload?.value;
            const house = state.housesList.find((item) => item.id === houseID)
            return {
                ...state,
                house: house,
                loading: false,
                error: null,
                flatSelectStatus: false,
            }
        case HOUSES_LOAD_LIST:
            return {
                ...state,
                housesList: action.payload,
                house: null,
                flatList: [],
                flat: null,
                loading: false,
                error: null,
                flatSelectStatus: true,
            }
        case HOUSES_SET_ERROR:
            return {
                ...state,
                housesList: [],
                house: null,
                flatList: [],
                flat: null,
                error: action.payload,
                loading: false,
                flatSelectStatus: true,
            }

        case FLATS_SET_FLAT:
            const flatID = action.payload?.value;
            const flat = state.flatsList.find((item) => item.id === flatID)
            return {
                ...state,
                flat: flat,
                // loading: true,
                error: null
            }
        case FLATS_LOAD_LIST:
            return {
                ...state,
                flatsList: action.payload,
                flat: null,
                loading: false,
                error: null
            }
        case FLATS_SET_ERROR:
            return {
                ...state,
                flatsList: [],
                flat: null,
                error: action.payload,
                loading: false
            }
        // return {...state, error: action.payload}
        default:
            return state
    }
}