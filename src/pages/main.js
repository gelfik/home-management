import React, {useEffect} from 'react'
import {Container} from '@mui/material';
import {connect} from "react-redux";
import {
    setAddressLoading,
    loadStreets,
    loadHouses,
    loadFlats,
    setStreet,
    setHouse,
    setFlat,
    setErrorHouse,
    setErrorStreet,
    setErrorFlat
} from "../stores/address/actions";
import {bindActionCreators} from "redux";
import withRequestsService from "../components/hoc/with-requests-service";
import AddressSelectors from "./components/address-selectors";
import ClientsList from "./components/clients-list"
import Spinner from "../components/spinner/Spinner";
import {loadClients, setClient, setClientActive, setClientLoading} from "../stores/client/actions";
import CreateClientModal from "../components/modal/create-client-modal";
import DeleteClientModal from "../components/modal/delete-client-modal";
import {modalCreateClientOpen, modalDeleteClientOpen, modalEditClientOpen} from "../stores/modal/actions";
import EditClientModal from "../components/modal/edit-client-modal";

const MainPage = ({
                      addressReducer,
                      clientReducer,
                      modalReducer,
                      requestsService,
                      setStreet,
                      loadStreets,
                      setErrorStreet,
                      setHouse,
                      loadHouses,
                      setErrorHouse,
                      setFlat,
                      loadFlats,
                      setErrorFlat,

                      setClientLoading,
                      setClientActive,
                      loadClients,
                      setClient,

                      modalCreateClientOpen,
                      modalDeleteClientOpen,
                      modalEditClientOpen,
                  }) => {
    useEffect(() => {
        console.log(addressReducer, clientReducer, modalReducer)
    }, [addressReducer, clientReducer, modalReducer]);

    useEffect(() => {
        setClientActive(false)
        requestsService.getStreets().then((response) => {
            loadStreets(response.data)
        }).catch(errors => {
            setErrorStreet('Возникла ошибка загрузки данных по выбранному адресу. Пожалуйста выберите адрес еще раз.')
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    useEffect(() => {
        if (addressReducer.street) {
            setClientActive(false)
            requestsService.getHouses(addressReducer.street?.id).then((response) => {
                loadHouses(response.data)
            }).catch(errors => {
                setErrorHouse('Возникла ошибка загрузки данных по выбранному дому. Пожалуйста выберите дом еще раз.')
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [addressReducer.street]);

    useEffect(() => {
        if (addressReducer.house) {
            setClientActive(false)
            requestsService.getFlats(addressReducer.house?.id).then((response) => {
                loadFlats(response.data)
            }).catch(errors => {
                setErrorFlat('Возникла ошибка загрузки данных по выбранной квартире/офису. Пожалуйста выберите квартиру/офис еще раз.')
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [addressReducer.house]);


    useEffect(() => {
        if (addressReducer.flat) {
            setClientLoading(true)
            requestsService.getClients(addressReducer.flat?.id).then((response) => {
                loadClients(response.data)
                setClientLoading(false)
                setClientActive(true)
            }).catch(errors => {
                setErrorFlat('Возникла ошибка загрузки данных жителей по выбранной квартире/офису. Пожалуйста выберите квартиру/офис еще раз.')
            })
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [addressReducer.flat]);

    return (
        <Container maxWidth={'md'}>
            {addressReducer.loading ?
                <Spinner/> :
                <AddressSelectors set={{setStreet, setHouse, setFlat}}
                                  addressReducer={addressReducer}/>
            }

            {!clientReducer.clientActive ?
                <h3>Выберите адрес, для упралвления жильцами</h3> : <>{clientReducer.loading ?
                    <Spinner/> : <ClientsList reducers={{addressReducer, clientReducer}}
                                              handleModalCreateClient={{
                                                  modalCreateClientOpen,
                                                  modalDeleteClientOpen,
                                                  modalEditClientOpen
                                              }}
                                              set={{setClient}}
                    />}</>}

            {(addressReducer.street && addressReducer.house && addressReducer.flat) && <>
                <DeleteClientModal/>
                <CreateClientModal/>
                <EditClientModal/>
            </>}
        </Container>
    );
}

const mapStateToProps = state => (state)

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setAddressLoading,
        setStreet,
        setHouse,
        setFlat,
        loadStreets,
        loadHouses,
        loadFlats,
        setErrorStreet,
        setErrorHouse,
        setErrorFlat,

        setClientLoading,
        setClientActive,
        loadClients,
        setClient,

        modalCreateClientOpen,
        modalDeleteClientOpen,
        modalEditClientOpen,
    }, dispatch)
}

export default withRequestsService()(connect(mapStateToProps, mapDispatchToProps)(MainPage));