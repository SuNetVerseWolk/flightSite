import {$} from './i.js';
import { setCurrentUser } from "./acountManeger.js";

$('#loginForm')?.addEventListener('submit', (e) => {
	e.preventDefault();

	const user = {
		'phone': e.target.phone.value,
		'password': e.target.password.value
	};
	
	if (setCurrentUser(user.phone, user.password)) {
		location.replace('../pages/acount.html');
	}
});