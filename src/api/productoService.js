
import axiosInstance from '@/config/http.config';
// import axios from 'axios';

const baseURL = process.env.VUE_APP_BASE_URL;






export function listProducto( token ) {

    return axiosInstance.get(`${baseURL}/producto/listar`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}


export function createProducto( token, payload ) {

    return axiosInstance.post(`${baseURL}/producto/crear`,payload,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}