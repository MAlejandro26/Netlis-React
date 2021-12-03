import HttpClients from '../services/HttpClient';

export const registrarSexo = sexo => {
    return new Promise((resolve, eject) =>{
        HttpClients.post('/sexo/nuevo', sexo).then(response =>{
            resolve(response);
        })
    })
}

