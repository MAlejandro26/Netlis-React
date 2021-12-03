import HttpClient from '../services/HttpClient'

export const listarDepartamento = () => {
    return new Promise((resolve, reject) =>{
        HttpClient.get('/departamentos').then(response=>{
            resolve(response);
        })
    } )
}