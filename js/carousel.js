const sliderContainer = document.getElementById("sliderContainer");
let allSlidesArray;
let slideIndex = 0;

const slideButtonPrev = document.getElementById("slideButtonPrev");
const slideButtonNext = document.getElementById("slideButtonNext");

async function getReviews() {
    const response = await fetch("/data/reviews.json");
    const reviewData = await response.json();
    createSlides(reviewData);
}

function createSlides(reviewData) {
    reviewData.forEach((review) => {
        const reviewContainer = document.createElement("div");
        reviewContainer.className = "testimonial__slide";

        const reviewImageContainer = document.createElement("div");
        reviewImageContainer.className = "testimonial__slide--img";
        const reviewImage = document.createElement("img");
        reviewImage.src = `img/reviews/${review.foto}`;

        const reviewText = document.createElement("p");
        reviewText.textContent = review.review;

        const reviewName = document.createElement("span");
        reviewName.textContent = review.naam;

        sliderContainer.appendChild(reviewContainer);
        reviewContainer.appendChild(reviewImageContainer);
        reviewImageContainer.appendChild(reviewImage);
        reviewContainer.appendChild(reviewText);
        reviewContainer.appendChild(reviewName);
    });

    allSlidesArray = Array.from(document.getElementsByClassName("testimonial__slide"));
    allSlidesArray[0].classList.add("activeSlide");
}

function displaySlide(activeSlideIndex) {
    allSlidesArray.forEach((slide) => {
        if (slide.classList.contains("activeSlide")) {
            slide.classList.remove("activeSlide");
        }
    });

    allSlidesArray[activeSlideIndex].classList.add("activeSlide");
};

function changeSlide(navInput) {

    if (slideIndex + navInput >= 0 && slideIndex + navInput <= allSlidesArray.length - 1) {
        slideIndex += navInput;

        displaySlide(slideIndex);
    }

    /*Make it loop...*/
};


document.addEventListener("DOMContentLoaded", ((e) => {
    getReviews();
}));

slideButtonPrev.addEventListener("click", ((e) => {
    changeSlide(-1);
}));

slideButtonNext.addEventListener("click", ((e) => {
    changeSlide(1);
}));