// Functionality to open and close modal when clicking on images
document.querySelectorAll('.photo img').forEach(image => {
    image.addEventListener('click', function() {
        // Create modal element
        const modal = document.createElement('div');
        modal.classList.add('modal');
        
        // Add image and close button to modal
        modal.innerHTML = `
            <div class="modal-content">
                <img src="${this.src}" alt="${this.alt}">
                <span class="close-modal">&times;</span>
            </div>
        `;

        // Append modal to body
        document.body.appendChild(modal);
        
        // Close modal when clicking the close button
        modal.querySelector('.close-modal').addEventListener('click', function() {
            modal.remove();
        });

        // Close modal when clicking outside the image
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.remove();
            }
        });
    });
});

const carouselImages = document.querySelector('.carousel-images');
let isPaused = false;

carouselImages.addEventListener('mouseover', () => {
  carouselImages.style.animationPlayState = 'paused';
  isPaused = true;
});

carouselImages.addEventListener('mouseout', () => {
  carouselImages.style.animationPlayState = 'running';
  isPaused = false;
});