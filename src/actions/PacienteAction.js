import HttpClient from '../services/HttpClient'

export const listarPaciente = () => {
    return new Promise((resolve, reject) =>{
        HttpClient.get('/pacientes').then(response=>{
            resolve(response);
        })
    } )
}