/* SimpleLightbox для работы с модальным окном и функции для отображения элементов интерфейса */
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { ghostEffect } from './additional_effects.js';



let lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionSelector: 'img',
    captionType: 'attr',
    captionPosition: 'bottom',
    captionDelay: 250,
});


export function createGallery(images) {
    const markup = images.map((img) => {
        return `<div class="gallery-item">
                  <a class="gallery-link" href="${img.largeImageURL}">
                    <img class="gallery-image" src="${img.webformatURL}" data-source="${img.largeImageURL}" alt="${img.tags}" />
                    <div class="gallery-textBox">
                        <div>
                            <p>Likes</p>
                            <p>${img.likes}</p>
                        </div>
                        <div>
                            <p>Views</p>
                            <p>${img.views}</p>
                        </div>
                        <div>
                            <p>Comments</p>
                            <p>${img.comments}</p>
                        </div>
                        <div>
                            <p>Downloads</p>
                            <p>${img.downloads}</p>
                        </div>
                    </div>
                  </a>
                </div>`;
    }).join("");
    const userList = document.getElementById('gallery');
    if (userList) {
        userList.insertAdjacentHTML("beforeend", markup);
    }
    // Плавное появление img при загрузке
    ghostEffect();

    // Инициализация lightbox
    if (lightbox) {
        lightbox.refresh();
    } else {
        lightbox = new SimpleLightbox('.gallery a', {
            captions: true,
            captionSelector: 'img',
            captionType: 'attr',
            captionPosition: 'bottom',
            captionDelay: 250,
        });
    }
}

export function clearGallery() {
    gallery.innerHTML = '';
}

export function showLoader() {
    const loader = document.getElementById('loader');
    loader.classList.remove('hidden');
}

export function hideLoader() {
    const loader = document.getElementById('loader');
    loader.classList.add('hidden');
}

/* 
Свойство	    Что это такое
previewURL	    🔹 Маленькое превью (миниатюра)
largeImageURL	🔸 Большое изображение (для просмотра в полноэкранном режиме)
userImageURL	⚠️ Аватар пользователя, загрузившего фото
*/

/* 
collections: 407
comments: 161
downloads: 169742
id: 5628953
imageHeight
: 
4000
imageSize
: 
4550644
imageWidth
: 
6000
isAiGenerated
: 
false
isGRated
: 
true
isLowQuality
: 
false
largeImageURL
: 
"https://pixabay.com/get/g0d8f8c112602fae81934c6b3959364dd4d366d3824570a7ef740f416aa8e2afdf5be7673fa4a2a1fc8303ca94fde0201956e7e7dc79e7023d7d53109f4338572_1280.jpg"
likes
: 
526
noAiTraining
: 
true
pageURL
: 
"https://pixabay.com/ru/photos/%D0%BA%D0%BE%D1%82-%D1%8F%D0%B7%D1%8B%D0%BA-%D0%BA%D0%BE%D1%82%D0%B0-%D0%BA%D0%BE%D1%88%D0%B0%D1%87%D1%8C%D0%B8-%D0%B3%D0%BB%D0%B0%D0%B7%D0%B0-5628953/"
previewHeight
: 
100
previewURL
: 
"https://cdn.pixabay.com/photo/2020/10/05/10/51/cat-5628953_150.jpg"
previewWidth
: 
150
tags
: 
"кот, язык кота, кошачьи глаза, похмелье, скумбрия, домашний питомец, домашнее животное, полосатый, серый полосатый кот, серый кот, домашняя кошка, портрет, природа, портрет кошки, кот профиля, мир животных, млекопитающее, животное"
type
: 
"photo"
user
: 
"Nennieinszweidrei"
userImageURL
: 
"https://cdn.pixabay.com/user/2025/08/18/14-44-49-424_250x250.jpeg"
userURL
: 
"https://pixabay.com/users/10084616/"
user_id
: 
10084616
views
: 
200172
webformatHeight
: 
427
webformatURL
: 
"https://pixabay.com/get/g42574e38f5857134b0ec1c01be8c84faf21ba1ded248d1b55bb657664a7002e6fe23bbd0bf58b7d0e327742e62fc284c27a60f85b33cd7b320e2d33405579b7a_640.jpg"
webformatWidth
: 
640
*/