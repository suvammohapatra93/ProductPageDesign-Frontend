let productImg = document.getElementById("productImg");

let btn = document.getElementsByClassName("btn");

btn[0].onclick = function () {
  productImg.src = "images/image1.png";

  for (let bt of btn) {
    bt.classList.remove("active");
  }

  this.classList.add("active");
};

btn[1].onclick = function () {
  productImg.src = "images/image2.png";

  for (let bt of btn) {
    bt.classList.remove("active");
  }

  this.classList.add("active");
};

btn[2].onclick = function () {
  productImg.src = "images/image3.png";

  for (let bt of btn) {
    bt.classList.remove("active");
  }

  this.classList.add("active");
};

// Image Preloading for smoother transitions
let images = [];
function preloadImages() {
  for (let i = 1; i <= 3; i++) {
    let img = new Image();
    img.src = `images/image${i}.png`;
    images.push(img);
  }
}

window.onload = preloadImages;
