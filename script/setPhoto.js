import {$} from './i.js';
import {setCurrentUserPhoto} from './acountManeger.js';

$('#userPhoto').addEventListener('click', (el) => {
	let inp = document.createElement('input');
	inp.type = 'file';

	inp.addEventListener('change', () => {
		const reader = new FileReader();
		
		reader.onload = (e => {
			el.target.src = e.target.result;
			setCurrentUserPhoto(e.target.result)
		});
		reader.readAsDataURL(inp.files[0]);
	})

	inp.click();
})