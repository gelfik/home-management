import React, {useEffect} from "react";
import {
    DialogContent,
    DialogActions,
    Button,
    Grid,
    TextField
} from "@mui/material";
import {useForm} from "react-hook-form";
import {bindActionCreators} from "redux";
import {loadClients, setClientErrorText, setClientLoading} from "../../stores/client/actions";
import {modalCreateClientClose} from "../../stores/modal/actions";
import withRequestsService from "../hoc/with-requests-service";
import {connect} from "react-redux";
import { BootstrapDialog, BootstrapDialogTitle} from './bootstrap-modal-config'

const CreateClientModal = ({
                               addressReducer,
                               modalReducer,
                               requestsService,

                               setClientLoading,
                               loadClients,

                               modalCreateClientClose,

                               setClientErrorText,
                           }) => {

    const {register, handleSubmit, reset} = useForm();

    useEffect(() => {
        if (modalReducer.modalCreateClientStatus) {
            reset()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [modalReducer.modalCreateClientStatus]);

    const onSubmitForm = (data) => {
        requestsService.createClient(data).then((response) => {
            requestsService.addClientInHouse(addressReducer.flat.id, response.data.id).then(() => {
                setClientLoading(true)
                modalCreateClientClose()
                requestsService.getClients(addressReducer.flat?.id).then((response) => {
                    loadClients(response.data)
                }).catch(() => {
                    setClientErrorText('Возникла ошибка загрузки данных жителей по выбранной квартире/офису. Пожалуйста выберите квартиру/офис еще раз.')
                })
            }).catch(() => {
                setClientErrorText('Возникла ошибка при добавлении жильца в квартиру/офис.')
                // setErrorFlat('Возникла ошибка загрузки данных по выбранной квартире/офису. Пожалуйста выберите квартиру/офис еще раз.')
            })
        }).catch(() => {
            setClientErrorText('Возникла ошибка при создании жильца.')
            // setErrorFlat('Возникла ошибка загрузки данных по выбранной квартире/офису. Пожалуйста выберите квартиру/офис еще раз.')
        })
    }

    return (<BootstrapDialog
            onClose={modalCreateClientClose}
            aria-labelledby="customized-dialog-title"
            open={modalReducer.modalCreateClientStatus}
        >
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <BootstrapDialogTitle id="customized-dialog-title" onClose={modalCreateClientClose}>
                    Добавить жильца
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <Grid container spacing={2}>
                        {addressReducer.street && <Grid item xs={12}>
                            <h4>{addressReducer.street?.prefix?.name} {addressReducer.street?.name},
                                д. {addressReducer.house?.name}, {addressReducer.flat?.name}</h4>
                        </Grid>}
                        <Grid item md={5} xs={12}>
                            <TextField {...register('phone', {
                                required: true,
                            })}
                                       InputProps={{startAdornment: '+7'}} fullWidth
                                       label="Телефон" required
                                       variant="outlined"
                                       onInput={(e) => {
                                           e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 10)
                                       }}
                            />
                        </Grid>
                        <Grid item md={7} xs={12}>
                            <TextField {...register('email')} type={'email'} fullWidth label="e-mail"
                                       variant="outlined"/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField {...register('name')} fullWidth label="Ф.И.О" variant="outlined"/>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus color={'inherit'} variant={'contained'} onClick={modalCreateClientClose}>
                        Отмена
                    </Button>
                    <Button type={"submit"} autoFocus color={'primary'} variant={'contained'}>
                        Добавить
                    </Button>
                </DialogActions>
            </form>
        </BootstrapDialog>
    )
}

const mapStateToProps = state => (state)

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setClientLoading,
        loadClients,

        modalCreateClientClose,

        setClientErrorText,
    }, dispatch)
}


// export default CreateClientModal;
export default withRequestsService()(connect(mapStateToProps, mapDispatchToProps)(CreateClientModal));