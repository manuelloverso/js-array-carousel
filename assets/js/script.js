// Add the images into an array
const imgArray = ["01", "02", "03", "04", "05"];

let activeImg = 0;

// Selecting carousel container
const carousel = document.querySelector(".carousel");

console.log(carousel, imgArray, activeImg);

// Scrolling to generate array imgages into the dom
for (let i = 0; i < imgArray.length; i++) {
  let singleImg = imgArray[i];
  // console.log(singleImg);
  carousel.insertAdjacentHTML(
    "beforeend",
    `<img src="./assets/img/${singleImg}.webp" alt="" />`
  );
}
