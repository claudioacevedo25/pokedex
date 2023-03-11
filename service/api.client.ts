import axios, { AxiosRequestConfig } from "axios"

const config: AxiosRequestConfig = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
}

const api = axios.create(config)

export default api
