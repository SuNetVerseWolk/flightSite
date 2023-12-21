import {$, $$} from './i.js';

$$('.date input').forEach(el => el.valueAsDate = new Date());
$('#amount').addEventListener('change', (el) => {
	el = el.target;
	const isForOne = +el.value === 1;
	$('#amountText').innerHTML = isForOne ? 'A seat for <b>1</b> person' : `Seats for <b>${el.value}</b> people`;
});