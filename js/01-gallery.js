import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const galleryCards = createGaleryCards(galleryItems);

galleryEl.addEventListener('click', onGalleryCardclick);

galleryEl.insertAdjacentHTML('beforeend', galleryCards);

function createGaleryCards(galleryItems) {
    return galleryItems
        .map(({description, original, preview}) => {
            return `
            <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
            </div> 
            `;
        })
        .join('');
}

function onGalleryCardclick(e) {
    console.log(e.target);
}


// import * as basicLightbox from 'basiclightbox'

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show()