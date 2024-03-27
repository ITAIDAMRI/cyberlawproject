import axios from "axios";

import { SERVER_URL } from "./config";

const BASE_URL = "/documents/";

export const getUserDocuments = async (user) => {
	const res = await axios.get(SERVER_URL + BASE_URL, {
		params: {
			user: user.email,
		},
		headers: {
			Authorization: `Bearer ${user.token}`,
		},
	});
	return res.data;
};

export const createDocument = async (title, documentData, user, finalDate) => {
	try {
		const result = await axios.post(
			SERVER_URL + BASE_URL,
			{
				title,
				Data: documentData,
				finalDate,
			},
			{
				headers: {
					Authorization: `Bearer ${user.token}`,
				},
				params: {
					user: user.email,
				},
			}
		);
		return result;
	} catch (error) {
		console.log(error);
	}
};



