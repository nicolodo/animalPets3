const myThumbnailContainer = document.querySelector(".thumbnail-container");

let currentIndex = 0;
let isShown = true;

const images = [
  {
    src: "../images/bear.gif",
    alt: "bear gif",
    className: "thumb",
    id: "bear",
  },
  {
    src: "../images/cat.gif",
    alt: "cat gif",
    className: "thumb",
    id: "cat",
  },
  {
    src: "../images/dog.gif",
    alt: "dog gif",
    className: "thumb",
    id: "dog",
  },
  {
    src: "../images/fox.gif",
    alt: "fox gif",
    className: "thumb",
    id: "fox",
  },
  {
    src: "../images/peacock.gif",
    alt: "peacock gif",
    className: "thumb",
    id: "peacock",
  },
  {
    src: "../images/penguin.gif",
    alt: "penguin gif",
    className: "thumb",
    id: "penguin",
  },
  {
    src: "../images/rabbit.gif",
    alt: "rabbit gif",
    className: "thumb",
    id: "rabbit",
  },
  {
    src: "../images/raccoon.gif",
    alt: "raccoon gif",
    className: "thumb",
    id: "raccoon",
  },
  {
    src: "../images/sloth.gif",
    alt: "sloth gif",
    className: "thumb",
    id: "sloth",
  },
  {
    src: "../images/squirrel.gif",
    alt: "squirrel gif",
    className: "thumb",
    id: "squirrel",
  },
];

function createThumbnails() {
  for (let i = 0; i < images.length; i++) {
    const myElement = document.createElement("img");
    myElement.src = images[i].src;
    myElement.alt = images[i].alt;
    myElement.className = images[i].className;
    myElement.id = images[i].id;

    myElement.addEventListener("click", function () {
      console.log(images[i]); // add a console log function to verify the click is detected
    });

    myThumbnailContainer.append(myElement);
  }
}

createThumbnails();

const buyButton = document.createElement("button"); // create a button. give
buyButton.classList.add("buy-button"); // give button a class name="buy-button"
buyButton.innerText = "Buy"; // give button some text
