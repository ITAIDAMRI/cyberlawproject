import axios from "axios"
import { SERVER_URL } from "./config"
const ROUTE_BASE = "/users"

export const authenticate = async (email, password) => {
    console.log(SERVER_URL + ROUTE_BASE)
    const res = await axios.get(SERVER_URL + ROUTE_BASE)
    return res
}