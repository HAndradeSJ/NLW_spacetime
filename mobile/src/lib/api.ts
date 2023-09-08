import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://10.219.111.135:3333',
})
