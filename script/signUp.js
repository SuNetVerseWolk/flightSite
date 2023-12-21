import {$} from './i.js';
import { signUp } from "./acountManeger.js";

$('#signUpForm')?.addEventListener('submit', (e) => {
	e.preventDefault();

	const user = {
		'name': e.target.name.value,
		'lastName': e.target.lastName.value,
		'passportNumber': e.target.passportNumber.value,
		'phone': e.target.phone.value,
		'password': e.target.password.value,
		'repassword': e.target.repassword.value
	};
	
	if (signUp(user)) {
		location.replace('../pages/acount.html');
	}
});