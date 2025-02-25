// Get elements
const gallery = document.querySelector('.gallery');
const pageContainer = document.querySelector('.page-container');
const barbershopImage = document.querySelector('.gallery-item img[alt="Barbershop"]');

// Event Listener to Show Pages on Click
barbershopImage.addEventListener('click', () => {
    gallery.classList.add('hide-gallery');
    setTimeout(() => {
        pageContainer.classList.add('show-pages');
    }, 500);
});
