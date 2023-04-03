import { galleryItems } from './gallery-items.js';




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
    // if (!e.target.classList.contains('gallery__image')){
        if (e.target.nodeName !== 'IMG'){
        return;
    }

    e.preventDefault()

    basicLightbox.create.src = "e.target.dataset.source";

    const linkBigImage = e.target.dataset.source;

    
document.querySelector('.gallery').onclick = () => {

	basicLightbox.create(`
		<img width="1400" height="900" src="${linkBigImage} ">
	`).show()

}
}


