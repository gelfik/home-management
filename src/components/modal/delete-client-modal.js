import React from "react";
import {
    DialogContent,
    DialogActions,
    Button,
    Grid, Card, Typography,
} from "@mui/material";
import {bindActionCreators} from "redux";
import {loadClients, setClientErrorText, setClientLoading} from "../../stores/client/actions";
import {modalDeleteClientClose} from "../../stores/modal/actions";
import withRequestsService from "../hoc/with-requests-service";
import {connect} from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailIcon from "@mui/icons-material/Email";
import { BootstrapDialog, BootstrapDialogTitle} from './bootstrap-modal-config'

const DeleteClientModal = ({
                               addressReducer,
                               clientReducer,
                               modalReducer,
                               requestsService,

                               setClientLoading,
                               loadClients,

                               modalDeleteClientClose,

                               setClientErrorText,
                           }) => {


    const onDeleteClick = () => {
        requestsService.deleteClient(clientReducer.client?.bindId).then(() => {
            modalDeleteClientClose()
            setClientLoading(true)
            requestsService.getClients(addressReducer.flat?.id).then((response) => {
                loadClients(response.data)
            }).catch(() => {
                setClientErrorText('Возникла ошибка загрузки данных жителей по выбранной квартире/офису. Пожалуйста выберите квартиру/офис еще раз.')
            })
        }).catch(() => {
            setClientErrorText('Возникла ошибка при удалении жильца.')
            // setErrorFlat('Возникла ошибка загрузки данных по выбранной квартире/офису. Пожалуйста выберите квартиру/офис еще раз.')
        })
    }

    return (<BootstrapDialog
            onClose={modalDeleteClientClose}
            aria-labelledby="customized-dialog-title"
            open={modalReducer.modalDeleteClientStatus}
        >
            <BootstrapDialogTitle id="customized-dialog-title" onClose={modalDeleteClientClose}>
                Удалить жильца
            </BootstrapDialogTitle>
            <DialogContent dividers>
                <Grid container spacing={2}>
                    {addressReducer.street && <Grid item xs={12}>
                        <h4>{addressReducer.street?.prefix?.name} {addressReducer.street?.name},
                            д. {addressReducer.house?.name}, {addressReducer.flat?.name}</h4>
                    </Grid>}
                    <Grid item xs={12}>
                <Card>
                    <Grid container gridRow sx={{padding: '10px'}}>
                        <Grid item xs={2} sx={{display: 'flex', justifyContent: 'center'}}>
                            <div>
                                <AccountCircleIcon color="primary" fontSize="large"/>
                            </div>
                        </Grid>
                        <Grid item xs={10}>
                            <Grid container gridRow rowSpacing={0.25}>
                                {clientReducer.client?.name &&
                                <Grid item xs={12} sx={{justifyContent: 'center'}}>
                                    <Typography variant={'inherit'}
                                                sx={{fontWeight: '550', fontSize: '12px'}}>
                                        {clientReducer.client?.name}
                                    </Typography>
                                </Grid>
                                }
                                <Grid item xs={12}>
                                    <Typography variant={'inherit'}
                                                sx={{
                                                    color: 'green',
                                                    fontWeight: '600',
                                                    fontSize: '14px',
                                                    justifyContent: 'flex-start',
                                                    alignItems: 'center',
                                                    display: 'flex',
                                                }}><PhoneEnabledIcon fontSize="smal"/> {clientReducer.client?.phone}</Typography>
                                </Grid>
                                {clientReducer.client?.email &&
                                <Grid item xs={12}>
                                    <Typography variant={'inherit'} sx={{
                                        fontSize: '12px',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        display: 'flex',
                                    }}>
                                        <EmailIcon fontSize="smal"/> {clientReducer.client?.email}
                                    </Typography>
                                </Grid>
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button autoFocus color={'inherit'} variant={'contained'} onClick={modalDeleteClientClose}>
                    Отмена
                </Button>
                <Button autoFocus color={'warning'} variant={'contained'} onClick={onDeleteClick}>
                    Удалить
                </Button>
            </DialogActions>
        </BootstrapDialog>
    )
}

const mapStateToProps = state => (state)

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setClientLoading,
        loadClients,

        modalDeleteClientClose,

        setClientErrorText,
    }, dispatch)
}

export default withRequestsService()(connect(mapStateToProps, mapDispatchToProps)(DeleteClientModal));