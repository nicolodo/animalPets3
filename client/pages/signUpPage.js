const myThumbnailContainer = document.querySelector(".thumbnail-container");

let currentIndex = 0;
let isShown = true;

let animal_id = "";

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
      console.log(images[i].id);
      animal_id = images[i].id;
      console.log("the animal_id is ", animal_id);
    });

    myThumbnailContainer.append(myElement);
  }
}

createThumbnails();

console.log("the animal_id is ", animal_id);

//------------------------------MAKE A PET (FORM CODE) -----------------------------------------------

const myCreateForm = document.getElementById("createForm");

myCreateForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Form submission code running");
  const rawFormData = new FormData(myCreateForm);
  console.log("Raw form Data:", rawFormData);
  console.log("animal_id in submitted form:", rawFormData.get("animal_id"));
  console.log("name in submitted form:", rawFormData.get("userPetName"));
  const jsObjectPlease = Object.fromEntries(rawFormData);

  console.log("jsObjectPlease:", jsObjectPlease); // Check in your console to see what this variable looks like

  // const jsonFormData = JSON.stringify(jsObjectPlease);
  // console.log("stringObject:", jsonFormData);

  // moodle fetch code for post to server
  fetch("http://localhost:4242/signUpPage", {
    method: "POST", // This is where we set the POST HTTP verb
    headers: {
      "Content-Type": "application/json", // This tells the server we're sending stringified JSON data
    },
    body: JSON.stringify({ rawFormData }),
  });
});

//"https://localhost:4242/",

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
