export const signUp = ({name, lastName, passportNumber, phone, password, repassword}) => {
	if (name && lastName && passportNumber && phone && password && password === repassword) {
		const newUser = {name, lastName, passportNumber, phone, password};
		let users = getUsers();

		if (!users.find(value => value.phone === newUser.phone)) {
			users.push(newUser);
			localStorage.setItem('users', JSON.stringify(users));
			setCurrentUser(newUser.phone, newUser.password);
			return true;
		}

		return false;
	}
}

export const getCurrentUser = () => {
	const currentUser = localStorage.getItem('currentUser');
	return currentUser ? getUsers().find(value => value.phone === currentUser) : false;
}

export const setCurrentUser = (phone, password) => {
	const users = getUsers();
	
	if (users.find(value => value.phone === phone && value.password === password)) {
		localStorage.setItem('currentUser', phone);
		return true;
	}

	return false;
}

export const setCurrentUserPhoto = (src) => {
	let currentUser = getCurrentUser();

	if (currentUser) {
		let users = getUsers();

		currentUser = users.find(value => value.phone === currentUser.phone);
		currentUser.photo = src;
		localStorage.setItem('users', JSON.stringify(users));
	}
}

export const getRidOfCurrentAcount = () => {
	const currentUser = getCurrentUser();
	let users = getUsers();
	const i = users?.findIndex(value => value.phone === currentUser?.phone);

	if(i !== -1) {
		users.splice(i, 1);
		localStorage.setItem('users', JSON.stringify(users));
		localStorage.removeItem('currentUser');
	}
}

const getUsers = () => {
	let users = JSON.parse(localStorage.getItem('users'));
	return !users ? [] : users;
}