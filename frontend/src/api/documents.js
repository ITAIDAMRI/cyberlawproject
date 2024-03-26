import axios from "axios";

import { SERVER_URL } from "./config";

const BASE_URL = "/documents/";

export const getUserDocuments = async (user) => {
	const res = await axios.get(SERVER_URL + BASE_URL, {
		params: {
			user,
		},
		headers: {
			Authorization: `Bearer ${user.token}`,
		},
	});

	return res.data;
};

export const createDocument = async (title, documentData, user) => {
	try {
		const result = await axios.post(SERVER_URL + BASE_URL, {
			headers: {
				Authorization: `Bearer ${user.token}`,
			},
			params: {
				user,
			},
			title,
			documentData,
		});
		return result.data;
	} catch (error) {
		console.log(error);
	}
};

// const createDocument = async () => {
//     const documentData = documentContainerRef.current.documentEditor.serialize();
//     try {
//       const response = await fetch('http://localhost:5000/api/documents/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ Data: documentData, title: titleInput }),
//       });
//       if (response.ok) {
//         console.log('Document saved successfully!');
//       } else {
//         console.error('Failed to save document:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error saving document:', error);
//     }
// }
