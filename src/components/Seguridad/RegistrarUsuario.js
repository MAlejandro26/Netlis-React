import { Button, Grid, TextField, Typography,Container } from '@mui/material';
import { useState } from 'react';
import style from '../../theme/Tools/Style';
import { registrarUsuario } from '../../actions/UsuarioAction';

const RegistrarUsuario = () => {
    const [usuario, setUsuario] = useState({
/*         id_empleado: '', */
        email: '',
        password: '',
        userName: ''
    })

    const ingresarValores = e =>{
        const {name, value} = e.target;
        setUsuario( anterior => ({
            ...anterior,
            [name] : value
            //nombre : jose
        }))
    }

    const registrarUsuarioBoton = e => {
        e.preventDefault();
         registrarUsuario(usuario).then(response => {
            console.log('Se registró usuario con éxito ', response);
            window.localStorage.setItem("token_seguridad", response.data.token);
        })
        console.log("Datos del usuario: ", usuario)
    }
    
    return(
        <Container>
            <div style={style.paper}>
                <Typography component="h1" variant="h5">
                    Registro de Usuario
                </Typography>
                <form style={style.form}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField name="email" value={usuario.email} onChange={ingresarValores}  type="email" variant="outlined" fullWidth label="Ingrese su email" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField name="userName" value={usuario.userName} onChange={ingresarValores}  variant="outlined" fullWidth label="Ingrese su nombre de usuario" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField name="password" value={usuario.password} onChange={ingresarValores}  type="password" variant="outlined" fullWidth label="Ingrese su contraseña" />
                        </Grid>
                    </Grid>
                    <Grid container justify="center">
                        <Grid item xs={12} md={12}>
                            <Button type="submit" onClick={registrarUsuarioBoton} fullWidth variant="contained" color="primary" size="large" style={style.submit}>
                                Enviar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

export default RegistrarUsuario;