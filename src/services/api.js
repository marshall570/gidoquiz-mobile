import axios from 'axios'

const api = axios.create({
    baseURL: 'https://gidoquiz-backend.herokuapp.com/'
})

export default api
