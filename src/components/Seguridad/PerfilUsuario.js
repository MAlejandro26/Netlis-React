import { Button, Grid, TextField, Typography,Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { obtenerUsuarioActual } from '../../actions/UsuarioAction';
import style from '../../theme/Tools/Style';

const PerfilUsuario = () => {
    const [usuario, setUsuario] = useState({
        nombre: '',
        email: '',
        username: '',
        password: ''
    });

    const ingresarValores = e =>{
        const [name, value] = e.target;
        setUsuario(anterior => ({
            ...anterior, 
            [name]:value
        }));
    }

    useEffect(() => {
        obtenerUsuarioActual().then(response => {
            console.log('Datos del usuario actual ', response)
        })
    })
    return ( 
        <Container component="main" maxWidth="md" justify="center">
            <div style={style.paper}>
                <Typography component="h1" variant="h5">
                    Perfil de Usuario
                </Typography>
                <form style={style.form}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <TextField name="nombre" value={usuario.nombre} onChange={ingresarValores} variant="outlined" fullWidth label="Ingrese su nombre" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField name="email" value={usuario.email} onChange={ingresarValores} type="email" variant="outlined" fullWidth label="Ingrese su email" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField name="username" value={usuario.username} onChange={ingresarValores} variant="outlined" fullWidth label="Ingrese su nombre de usuario" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField name="password" value={usuario.password} onChange={ingresarValores} type="password" variant="outlined" fullWidth label="Ingrese su contraseña" />
                        </Grid>
                    </Grid>
                    <Grid container justify="center">
                        <Grid item xs={12} md={12}>
                            <Button type="submit" fullWidth variant="contained" color="primary" size="large" style={style.submit}>
                                Enviar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
     );
}

export default PerfilUsuario;