import { config } from '../../config'
import axios from 'axios'

export const getAddress = async () => {
    const { token } = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : {};

    return await axios.get(`${config.api_host}/api/delivery-addresses?limit=`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
}

export const getLocation = async (lokasi, id) => {
    let slash = '';
    if (id !== '') {
        slash = '/'
    };
    // return await axios.get(`https://regions-indoneisa.herokuapp.com/api/${lokasi}?kode_induk=${kodeInduk}`);
    return await axios.get(`https://ainuttaqimzawait.github.io/api-wilayah-indonesia/api/${lokasi}${slash}${id}.json`);
}


export const createAddress = async data => {
    const { token } = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : {};

    return await axios.post(`${config.api_host}/api/delivery-addresses`, data, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
}