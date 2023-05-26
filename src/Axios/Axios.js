import axios from 'axios'


const baseurl='http://localhost:3002/'
const instance=axios.create({baseURL:baseurl})


export default instance