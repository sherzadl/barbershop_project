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
// Scroll to Page 3
function showPage3() {
    document.getElementById("page3").scrollIntoView({ behavior: "smooth" });
}
// Scroll to Page 4 after Page 3
window.addEventListener('scroll', function() {
    const page3 = document.getElementById('page3');
    const page4 = document.getElementById('page4');
    const page3Rect = page3.getBoundingClientRect();
    
    if (page3Rect.bottom <= window.innerHeight) {
        page4.scrollIntoView({ behavior: 'smooth' });
    }
});