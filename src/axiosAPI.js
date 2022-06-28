import axios from 'axios'

const axiosAPI = axios.create({
    baseURL: 'https://tms-js-pro-back-end.herokuapp.com/api',
})

axiosAPI.setup = key => {
    axiosAPI.defaults.headers.Authorization = `Token ${key}`
    // axiosAPI.defaults.headers.Accept = "application/json"
    // axiosAPI.defaults.headers['Content-Type'] = "application/json"
  }

export default axiosAPI