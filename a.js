// Countdown function
function countdown() {
    const countDownDate = new Date("Oct 31, 2023 00:00:00").getTime(); // Set the target date and time

    // Update the countdown every 1 second
    const x = setInterval(function () {
        const now = new Date().getTime(); // Get the current date and time
        const distance = countDownDate - now; // Calculate the time remaining

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown in the "countdown" element
        document.getElementById("countdown").innerHTML = `
            ${days}d ${hours}h ${minutes}m ${seconds}s`;

   
        if (distance < 0) {
            clearInterval(x); 
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
    }, 1000); 
}
window.onload = countdown;



// slider
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 4 seconds
}




// const contactForm = document.getElementById('contact-form');

// contactForm.addEventListener('submit', function(event) {
//     event.preventDefault();

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
//         alert('Please fill in all fields.');
//         return;
//     }

//     // You can send the form data to a server or perform other actions here
//     alert('Message sent successfully!');
//     contactForm.reset();
// });

// Get references to the buttons and image container
const showImagesButton1 = document.getElementById("showImagesButton");
const showImagesButton2 = document.getElementById("showImagesButton2");
const showImagesButton3 = document.getElementById("showImagesButton3");
const imageContainer = document.getElementById("imageContainer");

// Function to display images
function showImages(images) {
    // Clear the existing content of the image container
    imageContainer.innerHTML = "";

    // Loop through the image URLs and create image elements
    for (const imageUrl of images) {
        const img = document.createElement("img");
        img.src = imageUrl;
        imageContainer.appendChild(img);
    }

    // Show the image container
    imageContainer.style.display = "block";
}

// Default set of images to show
const defaultImageUrls = [
    "https://i.postimg.cc/2yJxD2hf/ICC-ODI-Bowlers-Rankings-Photo-removebg-preview.png" 

];

// Show default images when the page loads
showImages(defaultImageUrls);

showImagesButton1.addEventListener("click", function () {
    // You can replace the imageUrls with a different array of images here
    const differentImageUrls = [
        "https://i.postimg.cc/0NsQMPZ6/Screenshot-2023-10-06-120850.png",
        "https://i.postimg.cc/26q8gySK/Screenshot-2023-10-06-120925.png",
        "https://i.postimg.cc/9fkcP2Yt/Screenshot-2023-10-06-121003.png"
    ];
    showImages(differentImageUrls);
});

showImagesButton2.addEventListener("click", function () {
    // You can replace the imageUrls with another array of images here
    const anotherImageUrls = [
        "https://i.postimg.cc/MpKwhHsm/Screenshot-2023-10-06-121024.png",
        "https://i.postimg.cc/2yDRTSbv/Screenshot-2023-10-06-121033.png",
        "https://i.postimg.cc/jjxcbWmv/Screenshot-2023-10-06-121049.png"
    ];
    showImages(anotherImageUrls);
});

showImagesButton3.addEventListener("click", function () {
    // You can replace the imageUrls with yet another array of images here
    const yetAnotherImageUrls = [
        "https://i.postimg.cc/63DCyTjk/Screenshot-2023-10-06-120733.png",
        "https://i.postimg.cc/RCdMS2WR/Screenshot-2023-10-06-120746.png",
        "https://i.postimg.cc/mkpfYfMW/Screenshot-2023-10-06-120811.png"
    ];
    showImages(yetAnotherImageUrls);
});
