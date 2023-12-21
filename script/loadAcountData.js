import {$} from './i.js';
import {getCurrentUser} from './acountManeger.js';

const user = getCurrentUser();
const nameF = $('#name');
const lastNameF = $('#lastName');
const userPhotoImg = $('#userPhoto');

nameF.textContent = user.name || 'NoName';
lastNameF.textContent = user.lastName;
user.photo && (userPhotoImg.src = user.photo);