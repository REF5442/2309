// Array of images for the slideshow
const images = [
    "image1.jpeg", // Replace with actual image paths
    "image2.jpeg",
    "image3.jpeg",
    "image4.jpeg"
];

let currentIndex = 0;

// Get DOM elements
const slideshowImage = document.getElementById("slideshow-image");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

// Function to update the image source
function updateImage() {
    slideshowImage.src = images[currentIndex];
}

// Event listeners for navigation buttons
prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Wrap to last if at first
    updateImage();
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length; // Wrap to first if at last
    updateImage();
});

// Auto slideshow every 8 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}, 8000);