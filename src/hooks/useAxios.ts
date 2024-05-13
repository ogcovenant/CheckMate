import axios from "axios"
import getJWT from "../utils/getJWT"


const token = getJWT();

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Authorization: `Bearer ${token}`
  }
})