import { $ } from "./i.js";
import { getRidOfCurrentAcount } from "./acountManeger.js";

$('#deleteAcount').addEventListener('click', () => {
	getRidOfCurrentAcount();
	location.replace('../index.html');
})