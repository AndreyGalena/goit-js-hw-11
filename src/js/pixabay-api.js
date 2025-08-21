/* Функции для выполнения HTTP-запросов */
import { createGallery, hideLoader } from './render-functions'
import axios from "axios";
import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';


let API_KEY = '18618260-23b6d79f5c2a85fb2d6c9be6b';

// Делает запрос на сервер.
export function getImagesByQuery(query) {
    let URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&lang=ru&image_type=photo&orientation=horizontal&safesearch=true`;
    axios.get(URL)
        .then(response => {
            const data = response.data;
            if (data.hits.length === 0) {
                iziToast.error({
                    icon: 'fa-solid fa-xmark',
                    iconColor: 'white',
                    message: 'Sorry, there are no images matching your search query. Please, try again!',
                    messageColor: 'white',
                    position: 'center',
                    timeout: 5000,
                    progressBar: true,
                    backgroundColor: 'red',
                });
                // убирает Loader
                hideLoader();
                return;
            }
            // создаёт HTML разметку
            createGallery(data.hits);
            // убирает Loader
            hideLoader();
        })
        .catch(error => {
            iziToast.error({
                title: 'Attention',
                icon: 'fa-solid fa-xmark',
                iconColor: 'white',
                message: error.message,
                messageColor: 'white',
                position: 'center',
                timeout: 5000,
                progressBar: true,
                backgroundColor: 'red',
            });
            // убирает Loader
            hideLoader();
        })
}

/*
    // язык lang=ru
    Accepted values: cs, da, de, en, es, fr, id, it, hu, nl, 
                     no, pl, pt, ro, sk, fi, sv, tr, vi, th, 
                     bg, ru, el, ja, ko, zh
    Default: "en" 

    // тип изображения image_type=photo
    Accepted values: "all", "photo", "illustration", "vector"
    Default: "all"
*/