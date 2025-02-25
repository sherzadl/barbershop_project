// Get elements
const gallery = document.querySelector('.gallery');
const pageContainer = document.querySelector('.page-container');
const barbershopImage = document.querySelector('.gallery-item img[alt="Barbershop"]');

// Event Listener to Show Pages on Click
barbershopImage.addEventListener('click', () => {
    gallery.style.display = 'none';
    pageContainer.style.display = 'block';
    pageContainer.scrollTo(0, 0);  // Start at the top of Page 1
});
