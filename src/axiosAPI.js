import axios from 'axios'

const axiosAPI = axios.create({
    baseURL: 'https://tms-js-pro-back-end.herokuapp.com/api',
})

axiosAPI.setup = key => {
    api.defaults.headers.Authorization = `Token ${key}`
}

export default axiosAPI