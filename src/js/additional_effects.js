// Плавное появление img при загрузке
export function ghostEffect() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach((item, index) => {
        const img = item.querySelector('img');

        // обработчик load для полной загрузки изображения.
        img.addEventListener('load', () => {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 100); // каскадная задержка
        });
    });
}