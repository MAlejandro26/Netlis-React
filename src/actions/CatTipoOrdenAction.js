import HttpClients from '../services/HttpClient';

export const registrarTipoOrden = tipoorden => {
    return new Promise((resolve, eject) =>{
        HttpClients.post('/tipoorden/nuevo', tipoorden).then(response =>{
            resolve(response);
        })
    })
}

