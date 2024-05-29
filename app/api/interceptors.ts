import axios from "axios"
import Cookies from 'js-cookie'

// доработать, уточнить на счет второго токена на бэкенде

const API_URL = 'http://languages/'

const options = {
	baseURL: API_URL,
	headers: {
	  'Content-Type': 'application/json',
	}
}

export const $axios = axios.create(options)
  
$axios.interceptors.request.use(config => {
	  const token = Cookies.get(TOKEN)
	  if (config?.headers && token) {
		config.headers.Authorization = `Bearer ${token}`
	  }
	  return config
	}
)