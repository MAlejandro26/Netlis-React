import HttpClient from '../services/HttpClient'

export const listarPais = () => {
    return new Promise((resolve, reject) =>{
        HttpClient.get('/pais').then(response=>{
            resolve(response);
        })
    } )
}