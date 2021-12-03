import HttpClient from '../services/HttpClient'

export const listarMedico = () => {
    return new Promise((resolve, reject) =>{
        HttpClient.get('/medico').then(response=>{
            resolve(response);
        })
    } )
}