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

//------------------------------MAKE A PET (FORM CODE) -----------------------------------------------

const myCreateForm = document.querySelector(".createForm");

myCreateForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const rawFormData = new FormData(form);
  const jsObjectPlease = Object.fromEntries(rawFormData);

  console.log(jsObjectPlease); // Check in your console to see what this variable looks like
});

//async function handleSubmit(event) {
// alert("Pet Created!");
//  event.preventDefault();
//  myCreateForm.addEventListener("submit", handleSubmit);

//const rawFormData = new FormData(myCreateForm);

// const jsFormData = Object.fromEntries(rawFormData);
// console.log(jsFormData);

// prepare to send this form data across the internet
// so we'll turn it into JSON
//const jsonFormData = JSON.stringify(jsFormData);
//console.log(jsFormData, jsonFormData); // you will see the js format of the form data and the json version.

// now we need to make a template for the sending of this data.
//const serverPostResp = await fetch(
//"https://animal-pets-server.onrender.com/",
// {
// headers: {
//  "Content-Type": "application/json",
//},
//method: "POST",
//body: jsonFormData,
//},
//);
// window.location.reload() not sure what this is for ????
// const res = await serverPostResp.json();
// console.log(res); // remember we asked the server, when it receives a get/post request, to send the client back a console.log response displaying the BODY content of the data it just received. res.json({ message: req.body }); So it shows us the actual users inputted text (which we made the body in json format above)
//}

// add an event listener to the form, so when the user submits the form, run the handleSubmit function
// addEventListenr passes in the arguments - that not our job. So *it* passes in the 'Event Object'
