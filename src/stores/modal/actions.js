export const MODAL_CREATE_CLIENT_OPEN = 'MODAL_CREATE_CLIENT_OPEN';
export const MODAL_CREATE_CLIENT_CLOSE = 'MODAL_CREATE_CLIENT_CLOSE';

export const MODAL_DELETE_CLIENT_OPEN = 'MODAL_DELETE_CLIENT_OPEN';
export const MODAL_DELETE_CLIENT_CLOSE = 'MODAL_DELETE_CLIENT_CLOSE';

export const MODAL_EDIT_CLIENT_OPEN = 'MODAL_EDIT_CLIENT_OPEN';
export const MODAL_EDIT_CLIENT_CLOSE = 'MODAL_EDIT_CLIENT_CLOSE';

export const modalCreateClientOpen = () => ({
    type: MODAL_CREATE_CLIENT_OPEN,
    payload: true
})

export const modalCreateClientClose = () => ({
    type: MODAL_CREATE_CLIENT_CLOSE,
    payload: false
})

export const modalDeleteClientOpen = () => ({
    type: MODAL_DELETE_CLIENT_OPEN,
    payload: true
})

export const modalDeleteClientClose = () => ({
    type: MODAL_DELETE_CLIENT_CLOSE,
    payload: false
})

export const modalEditClientOpen = () => ({
    type: MODAL_EDIT_CLIENT_OPEN,
    payload: true
})

export const modalEditClientClose = () => ({
    type: MODAL_EDIT_CLIENT_CLOSE,
    payload: false
})
