// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Alert for booking buttons
document.querySelectorAll('.book-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Booking feature coming soon!');
    });
});
