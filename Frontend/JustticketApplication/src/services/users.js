

import { config } from './config';

import axios from 'axios'
import { exactRegex } from './../../node_modules/@rolldown/pluginutils/dist/simple-filters';



export async function register(firstName,lastName,email,password,phone,date){
    try {
         const url = `${config.server}/user/register`

    const body = {firstName,lastName,email,password,phone,date}

    const response = await axios.post(url,body)

    return response.data
    } catch (ex) {
        console.log(
            `exception : `,ex
        )

        
    }
   
}

export async function login(email,password){
    try {
        const url = `${config.server}/user/login`
        const body = {email,password}
        const response = await axios.post(url,body)
        return response.data
        
    } catch (ex) {
        console.log('exception : ',ex)
    }
}