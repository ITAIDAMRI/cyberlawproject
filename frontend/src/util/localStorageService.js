const USER_KEY = "user";

const localStorageService = {
	saveUser: (user) => {
		localStorage.setItem(USER_KEY, JSON.stringify(user));
	},

	getUser: () => {
		const json = localStorage.getItem(USER_KEY);
		return json ? JSON.parse(json) : null;
	},

	removeUser: () => {
		localStorage.removeItem(USER_KEY);
	},
};
export default localStorageService;
