import { Avatar, Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import style from '../../theme/Tools/Style';
import LockClockOutlinedIcon from '@mui/icons-material/LockClockOutlined';
import { loginUsuario } from '../../actions/UsuarioAction';

const Login = () => {
    const [usuario, setUsuario] = useState({
        email: '',
        password: '',
    })

    const ingresarValores = e =>{
        const {name, value} = e.target;
        setUsuario( anterior => ({
            ...anterior,
            [name] : value
            //nombre : jose
        }))
    }

    const loginUsuarioBoton = e => {
        e.preventDefault();
        loginUsuario(usuario).then(response =>{
            console.log('Login exitosio ', response);
            window.localStorage.setItem('token_seguridad', response.data.token);
        });
    }
    return ( 
        <Container>
            <div style={style.paper}>
                <Avatar style={style.avatar}>
                    <LockClockOutlinedIcon style={style.icon}/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login de Usuario
                </Typography>
                <form style={style.form}>
                    <TextField variant="outlined" label="Ingrese su email" name="email" onChange={ingresarValores} value={usuario.email} fullWidth />
                    <TextField variant="outlined" type="password" label="Ingrese su contraseña" name="password" onChange={ingresarValores} value={usuario.password} fullWidth />
                    <Button type="submit" onClick={loginUsuarioBoton} fullWidth variant="container" color="primary" style={style.submit} >
                        Iniciar Sesión
                    </Button>
                </form>
            </div>
        </Container>
     );
}

export default Login;