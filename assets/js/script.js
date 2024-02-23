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
    }" src="./assets/img/${singleImg}.webp" alt="" />`
  );
}

//Bonus
const smallContainer = document.createElement("div");
smallContainer.classList.add("small-container");
carousel.append(smallContainer);

// Scrolling to generate array imgages into the dom
for (let i = 0; i < imgArray.length; i++) {
  let singleImg = imgArray[i];
  // console.log(singleImg);
  smallContainer.insertAdjacentHTML(
    "beforeend",
    `<img class="small-img ${
      i == indexImg ? "active" : ""
    }" src="./assets/img/${singleImg}.webp" alt="" />`
  );
}

//Function to scroll to the next img
function nextImg() {
  //Incrementing the index by 1 on each click
  indexImg++;

  //Selecting all the imgages in the carousel
  const allImg = document.querySelectorAll(".carousel > img");

  // Go back to the first image when the last one is active
  if (indexImg > allImg.length - 1) {
    indexImg = 0;
  }

  //Remove the active class to the images
  const activeImg = document.querySelector(".active");
  activeImg.classList.remove("active");

  //Add the class active
  allImg[indexImg].classList.add("active");
  console.log(allImg);
}

//Function to scroll to the previous img
function prevImg() {
  //Decrementing the index by 1 on each click
  indexImg--;

  //Selecting all the imgages in the carousel
  const allImg = document.querySelectorAll(".carousel > img");
  console.log(allImg);

  // Go back to the last image when the first one is active
  if (indexImg < 0) {
    indexImg = allImg.length - 1;
  }

  //Remove the active class to the images
  const activeImg = document.querySelector(".active");
  activeImg.classList.remove("active");

  //Add the class active
  allImg[indexImg].classList.add("active");
}
