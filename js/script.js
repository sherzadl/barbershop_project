// Logo Animation
window.addEventListener('load', () => {
    const logo = document.querySelector('.logo');
    logo.classList.add('logo-animate');

    // Trigger gallery animation for all at once
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item) => {
        item.style.opacity = '1';
        item.style.transform = 'scale(1)';
    });
});
    