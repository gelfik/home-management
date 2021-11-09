export const ADDRESS_LOADING = 'ADDRESS_LOADING';

export const STREETS_LOAD_LIST = 'STREETS_LOAD_LIST';
export const STREETS_SET_STREET = 'STREETS_SET_STREET';
export const STREETS_SET_ERROR = 'STREETS_SET_ERROR';

export const HOUSES_LOAD_LIST = 'HOUSES_LOAD_LIST';
export const HOUSES_SET_HOUSE = 'HOUSES_SET_HOUSE';
export const HOUSES_SET_ERROR = 'HOUSES_SET_ERROR';

export const FLATS_LOAD_LIST = 'FLATS_LOAD_LIST';
export const FLATS_SET_FLAT = 'FLATS_SET_HOUSE';
export const FLATS_SET_ERROR = 'FLATS_SET_ERROR';

export const setAddressLoading = (status) => ({
    type: ADDRESS_LOADING,
    payload: status
})

export const setStreet = (street) => ({
    type: STREETS_SET_STREET,
    payload: street
})

export const loadStreets = (streetList) => ({
    type: STREETS_LOAD_LIST,
    payload: streetList?.filter((item) => item.cityId === 1)
})

export const setErrorStreet = (error) => ({
    type: STREETS_SET_ERROR,
    payload: error
})

export const setHouse = (house) => ({
    type: HOUSES_SET_HOUSE,
    payload: house
})

export const loadHouses = (houseList) => ({
    type: HOUSES_LOAD_LIST,
    payload: houseList
})

export const setErrorHouse = (error) => ({
    type: HOUSES_SET_ERROR,
    payload: error
})

export const setFlat = (flat) => ({
    type: FLATS_SET_FLAT,
    payload: flat
})

export const loadFlats = (flatList) => ({
    type: FLATS_LOAD_LIST,
    payload: flatList?.filter((item) => item.typeId === 3)
})

export const setErrorFlat = (error) => ({
    type: FLATS_SET_ERROR,
    payload: error
})