import React from "react";
import {Grid, IconButton, Card, Typography} from "@mui/material";
import AddReactionIcon from '@mui/icons-material/AddReaction';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';


const getClientList = (clientReducer, setClient, modalDeleteClientOpen, modalEditClientOpen) => {
    if (clientReducer.clientList?.length > 0) {
        return clientReducer.clientList?.map((item, i) =>
            <Grid item md={4} xs={12} key={i}>
                <Card sx={{maxWidth: 345, minHeight: 70}}>
                    <Grid container gridRow sx={{padding: '10px'}}>
                        <Grid item xs={2} sx={{display: 'flex', justifyContent: 'center'}}>
                            <div>
                                <AccountCircleIcon color="primary" fontSize="large"/>
                            </div>
                        </Grid>
                        <Grid item xs={10}>
                            <Grid container gridRow rowSpacing={0.25}>
                                {item.name &&
                                <Grid item xs={12} sx={{justifyContent: 'center'}}>
                                    <Typography variant={'inherit'}
                                                sx={{fontWeight: '550', fontSize: '12px'}}>
                                        {item.name}
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
                                                }}><PhoneEnabledIcon fontSize="smal"/> {item.phone}</Typography>
                                </Grid>
                                {item.email &&
                                <Grid item xs={12}>
                                    <Typography variant={'inherit'} sx={{
                                        fontSize: '12px',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        display: 'flex',
                                    }}>
                                        <EmailIcon fontSize="smal"/> {item.email}
                                    </Typography>
                                </Grid>
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container gridRow sx={{backgroundColor: "#f1f1f1", padding: '5px'}}>
                        <Grid item xs={6} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <IconButton onClick={()=>{setClient(item.id); modalDeleteClientOpen()}}>
                                <DeleteForeverIcon/>
                            </IconButton>
                        </Grid>
                        <Grid item xs={6} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <IconButton onClick={()=>{setClient(item.id); modalEditClientOpen()}}>
                                <EditIcon/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
        )
    } else {
        return (<Grid item xs={12}>
            Жители еще не добавлены по выбранному адресу!
        </Grid>)
    }
}

const ClientsList = ({
                         reducers: {addressReducer, clientReducer},
                         handleModalCreateClient: {modalCreateClientOpen, modalDeleteClientOpen, modalEditClientOpen},
                         set: {setClient}
                     }) => {
    return (<Grid container spacing={2} sx={{mt: 1}}>
        <Grid item xs={10}>
            <h4>{addressReducer.street?.prefix?.shortName}. {addressReducer.street?.name},
                д. {addressReducer.house?.name}, {addressReducer.flat?.name}</h4>
        </Grid>
        <Grid item xs={2} sx={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
            <div>
                <IconButton color="primary" edge={'end'} onClick={modalCreateClientOpen}>
                    <AddReactionIcon fontSize="large"/>
                </IconButton>
            </div>
        </Grid>
        {getClientList(clientReducer, setClient, modalDeleteClientOpen, modalEditClientOpen)}
    </Grid>)
}

export default ClientsList;