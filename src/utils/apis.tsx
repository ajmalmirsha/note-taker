
import axios from 'axios'

export const noteApi = axios.create({
    baseURL: process.env.REACT_APP_URL
})