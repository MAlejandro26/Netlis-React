import { Avatar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import logo from '../../../logo.svg';


const useStyle = makeStyles((theme) => ({
    seccionDesktop:{
        display:"none"
        
    },
    seccionMobile : {
        display : "flex"
    },
    grow: {
        flexgrow :1
    },
    avatarSize : {
        width : 40,
        height : 40
    }
}));

const BarSesion = () => {
    const classes = useStyle();
    return (
        <Toolbar>
            <IconButton color="inherit">
                <i className="material-icons">menu</i>
            </IconButton>

            <Typography variant="h6">Cursos Online</Typography>
            <div className={classes.grow}>
                <Button color="inherit">
                    Salir
                </Button>
                <Button color="inherit">
                    {"Nombre de Usuario"}
                </Button>
                <Avatar src={logo}> 

                </Avatar>
            </div>

            <div className={classes.seccionMobile}>
                <IconButton color="inherit">
                    <i className="material-icons">more_vert</i>
                </IconButton>
            </div>
        </Toolbar>
    );
};

export default BarSesion;