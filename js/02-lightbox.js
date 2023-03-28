import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryCards = createGaleryCards(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryCards);

new SimpleLightbox('.gallery a',
{ captionsData: "alt",
captionDelay: 250,
});

function createGaleryCards(galleryItems) {
    return galleryItems
        .map(({description, original, preview}) => {
            return `
            
            <li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>
            </li>
            `;
        })
        .join('');
}




