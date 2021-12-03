import HttpClients from '../services/HttpClient';

export const registrarPerfil = perfil => {
    return new Promise((resolve, eject) =>{
        HttpClients.post('/perfiles/nuevo', perfil).then(response =>{
            resolve(response);
        })
    })
}

