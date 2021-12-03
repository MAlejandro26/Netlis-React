import HttpClient from '../services/HttpClient'

export const listarSexo = () => {
    return new Promise((resolve, reject) =>{
        HttpClient.get('/sexo').then(response=>{
            resolve(response);
        })
    } )
}