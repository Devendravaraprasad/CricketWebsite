
// for sliders
let slideIndex = 0;
showslides();

function showslides() {
  let i;
  let slides = document.getElementsByClassName("myslides");
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
  setTimeout(showslides, 2000); // Change image every 4 seconds
}

// buttons for t20,odi,test

// Get references to the buttons and image container
const showImagesButton1 = document.getElementById("button1");
const showImagesButton2 = document.getElementById("button2");
const showImagesButton3 = document.getElementById("button3");
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


// for heinburger menu
burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navlist=document.querySelector('.navlist')
rightnav=document.querySelector('.rightnav')

burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class');
    navlist.classList.toggle('v-class');
    navbar.classList.toggle('hnav');
})





