const gifs = [
  "images/bear.gif",
  "images/cat.gif",
  "images/dog.gif",
  "images/fox.gif",
  "images/peacock.gif",
  "images/penguin.gif",
  "images/rabbit.gif",
  "images/raccoon.gif",
  "images/sloth.gif",
  "images/squirrel.gif",
];

const container = document.getElementById("gif-container");

gifs.forEach((src) => {
  const img = document.createElement("img");
  img.src = src;
  img.classList.add("floating-gif");

  img.style.left = Math.random() * window.innerWidth + "px";
  img.style.top = Math.random() * window.innerHeight + "px";

  container.appendChild(img);

  floatRandom(img);
});

function floatRandom(el) {
  const speed = 3000 + Math.random() * 4000;
  const newX = Math.random() * window.innerWidth;
  const newY = Math.random() * window.innerHeight;

  el.animate(
    [
      { left: el.style.left, top: el.style.top },
      { left: `${newX}px`, top: `${newY}px` },
    ],
    {
      duration: speed,
      easing: "linear",
      fill: "forwards",
    },
  );

  setTimeout(() => {
    el.style.left = `${newX}px`;
    el.style.top = `${newY}px`;
    floatRandom(el);
  }, speed);
}
