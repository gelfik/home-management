import React, {useMemo} from "react";
import {Grid} from "@mui/material";
import Select from "react-select";

const AddressSelectors = ({set: {setStreet, setHouse, setFlat}, addressReducer}) => {
    const optionStreets = useMemo(() => (addressReducer.streetsList.map(item => ({
        value: item?.id,
        label: item?.name
    }))), [addressReducer.streetsList])

    const optionHouses = useMemo(() => (addressReducer.housesList.map(item => ({
        value: item?.id,
        label: item?.name
    }))), [addressReducer.housesList])

    const optionFlats = useMemo(() => (addressReducer.flatsList.map(item => ({
        value: item?.id,
        label: item?.name
    }))), [addressReducer.flatsList])

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <h2>Выберите адрес</h2>
            </Grid>
            <Grid item md={6} xs={12}>
                <Select required placeholder={'Улица'} noOptionsMessage={() => {
                    return 'Ничего не найдено'
                }} options={optionStreets} onChange={setStreet}
                        value={addressReducer.street ? {
                            value: addressReducer.street?.id,
                            label: addressReducer.street?.name
                        } : null}/>
            </Grid>
            <Grid item md={3} xs={12}>
                <Select required placeholder={'Дом'} noOptionsMessage={() => {
                    return 'Ничего не найдено'
                }} options={optionHouses} onChange={setHouse} value={addressReducer.house ? {
                    value: addressReducer.house?.id,
                    label: addressReducer.house?.name
                } : null} isDisabled={addressReducer.houseSelectStatus}/>
            </Grid>
            <Grid item md={3} xs={12}>
                <Select required placeholder={'Кв./офис'} noOptionsMessage={() => {
                    return 'Ничего не найдено'
                }} options={optionFlats} onChange={setFlat} value={addressReducer.flat ? {
                    value: addressReducer.flat?.id,
                    label: addressReducer.flat?.name
                } : null} isDisabled={addressReducer.flatSelectStatus}/>
            </Grid>
        </Grid>)
}

export default AddressSelectors;