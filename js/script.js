// Get elements
const gallery = document.querySelector('.gallery');
const pageContainer = document.querySelector('.page-container');
const barbershopImage = document.querySelector('.gallery-item img[alt="Barbershop"]');

// Event Listener to Show Pages on Click
barbershopImage.addEventListener('click', () => {
    gallery.classList.add('hide-gallery');
    pageContainer.classList.add('show-pages');
    pageContainer.scrollTop = 0;  // Start at the top of Page 1
});
