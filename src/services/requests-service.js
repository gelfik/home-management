import initAxios from "./axios-service";

export default class RequestsService {
    constructor() {
        this._request = initAxios
    }

    get request() {
        return this._request();
    }

    getStreets() {
        return this.request.get('/Request/streets')
    }

    getHouses(id) {
        return this.request.get(`/Request/houses/${id}`)
    }

    getFlats(id) {
        return this.request.get(`/Request/house_flats/${id}`)
    }

    getClients(addressID) {
        return this.request.get(`/HousingStock/clients`, {params: {addressId: addressID}})
    }

    createClient(data) {
        return this.request.post(`/HousingStock/client`, data)
    }

    addClientInHouse(addressId, clientId) {
        return this.request.put(`/HousingStock/bind_client`, {"AddressId": addressId,"ClientId": clientId})
    }

    deleteClient(clientId) {
        return this.request.delete(`/HousingStock/bind_client/${clientId}`)
    }

    editClient(data) {
        return this.request.post(`/HousingStock/client`, data)
    }
}