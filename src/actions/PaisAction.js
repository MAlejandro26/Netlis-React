import HttpClient from '../services/HttpClient';

/* export const registrarPais = pais => {
    return new Promise((resolve, eject) =>{
        HttpClient.post('/Pais', pais).then(response =>{
            resolve(response);
        })
    })
} */

export const obtenerPais = () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/Pais').then(response =>{
            resolve(response);
        })
    })
}

/* export const loginUsuario = (usuario) => {
    return new Promise ((resolve, reject) => {
        HttpClient.post('/Usuario/login', usuario).then(response => {
            resolve(response);
        })
    })
} */