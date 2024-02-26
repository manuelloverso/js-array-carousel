// Add the images into an array
const imgArray = ["01", "02", "03", "04", "05"];

let indexImg = 0;

// Selecting carousel container
const carousel = document.querySelector(".carousel");

console.log(carousel, imgArray, indexImg);

// Scrolling to generate array imgages into the dom
for (let i = 0; i < imgArray.length; i++) {
  let singleImg = imgArray[i];
  // console.log(singleImg);
  carousel.insertAdjacentHTML(
    "beforeend",
    `<img class="${
      i == indexImg ? "active" : ""
    }" src="./assets/img/${singleImg}.jpg" alt="" />`
  );
}

//Bonus
const imgBox = document.querySelectorAll(".img-box");

// Scrolling to generate array imgages into the dom
for (let i = 0; i < imgBox.length; i++) {
  let singleImg = imgArray[i];
  // console.log(singleImg);
  imgBox[i].insertAdjacentHTML(
    "beforeend",
    `<img class="small-img ${
      i == indexImg ? "active" : ""
    }" src="./assets/img/${singleImg}.jpg" alt="" />`
  );
}

//Try to add images switching on thumbnail click
/* for (let i = 0; i < imgBox.length; i++) {
  imgBox[i].addEventListener("click", function () {
    console.log(imgBox[i]);

    const activeImages = document.querySelector(".img-box .active");
    console.log(activeImages);

    const innerImg = imgBox[i].querySelector("img");
    console.log(innerImg);

    activeImages.classList.remove("active");

    innerImg.classList.add("active");
  });
} */

//Function to scroll to the next img
function nextImg() {
  //Incrementing the index by 1 on each click
  indexImg++;

  //Selecting all the imgages in the carousel
  const allImg = document.querySelectorAll(".carousel  img");
  const allBoxImg = document.querySelectorAll(".small-container  img");

  // Go back to the first image when the last one is active
  if (indexImg > allImg.length - 1) {
    indexImg = 0;
  }

  //Remove the active class to the images
  const activeImg = document.querySelector(".carousel .active");
  activeImg.classList.remove("active");

  const smallActiveImg = document.querySelector(".small-container .active");
  smallActiveImg.classList.remove("active");

  //Add the class active
  allImg[indexImg].classList.add("active");
  console.log(allImg);

  allBoxImg[indexImg].classList.add("active");
}

//Function to scroll to the previous img
function prevImg() {
  //Decrementing the index by 1 on each click
  indexImg--;

  //Selecting all the imgages in the carousel
  const allImg = document.querySelectorAll(".carousel  img");
  const allBoxImg = document.querySelectorAll(".small-container  img");

  // Go back to the last image when the first one is active
  if (indexImg < 0) {
    indexImg = allImg.length - 1;
  }

  //Remove the active class to the images
  const activeImg = document.querySelector(".carousel .active");
  activeImg.classList.remove("active");

  const smallActiveImg = document.querySelector(".small-container .active");
  smallActiveImg.classList.remove("active");

  //Add the class active
  allImg[indexImg].classList.add("active");
  allBoxImg[indexImg].classList.add("active");
}
