import axios from 'axios'


axios.defaults.baseURL='http://localhost:3005'

axios.interceptors.response.use(res => res.data)