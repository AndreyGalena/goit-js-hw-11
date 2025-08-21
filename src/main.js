import { getImagesByQuery } from './js/pixabay-api';
import { clearGallery, showLoader, hideLoader } from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

/* 
API_KEY находится:
https://pixabay.com/api/docs/
Parameters -> key (required)	str	Your API key: 18618260-23b6d79f5c2a85fb2d6c9be6b
*/

iziToast.success({
    title: 'Внимание!',
    message: 'Мы готовы к работе !',
    position: 'topRight'
});

const form = document.querySelector('.form');

form.addEventListener('submit', async (event) => {
    // стоп действие по умолчанию
    event.preventDefault();
    // вызывает loader
    showLoader();
    // что ввёл пользователь
    const query = form.elements['search-text'].value.trim();

    // Очистка предыдущих результатов
    clearGallery();

    // если ничего то.
    if (!query) return;
    // Делает запрос на сервер.
    getImagesByQuery(query);
});
