import axios from "axios";
import { SERVER_URL } from "./config";
const ROUTE_BASE = "/users/";

export const authenticate = async (email, password) => {
	const reqURL = SERVER_URL + ROUTE_BASE + "login";
	const res = await axios.get(reqURL, {
		params: {
			email,
			password,
		},
	});
	return res;
};

export const checkToken = async (token) => {
	const reqURL = SERVER_URL + ROUTE_BASE + "checkLoggedIn";
	const res = await axios.get(reqURL, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return res;
};
