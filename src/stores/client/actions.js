export const CLIENT_LOAD_LIST = 'CLIENT_LOAD_LIST';
export const CLIENT_LOADING = 'CLIENT_LOADING';
export const CLIENT_ACTIVE = 'CLIENT_ACTIVE';
export const CLIENT_SET_ERROR = 'CLIENT_SET_ERROR';
export const CLIENT_SET_CLIENT = 'CLIENT_SET_CLIENT';

export const loadClients = (clientList) => {
    if (clientList.length === 0) {
        clientList = []
    }
    return {
        type: CLIENT_LOAD_LIST,
        payload: clientList
    }
}

export const setClient = (clientId) => ({
    type: CLIENT_SET_CLIENT,
    payload: clientId
})

export const setClientLoading = (status) => ({
    type: CLIENT_LOADING,
    payload: status
})

export const setClientActive = (status) => ({
    type: CLIENT_ACTIVE,
    payload: status
})

export const setClientErrorText = (errorText) => ({
    type: CLIENT_SET_ERROR,
    payload: errorText
})