console.log("This is the Pet Animal Page");

// Key: mps = money per second
// key: stats = attributes of pet
// Key: items = shop items to buy
let state = {
  mps: 1,
  items: [],
  stats: [],
  settings: [],
};

const image = document.querySelector("img");
const mpsDisplay = document.getElementById("mps");
const statsDisplay = document.getElementById("stats");

image.addEventListener("click", function () {
  state.mps += 1;
  mpsDisplay.innerText = state.mps;
  console.log(state.mps);
});

function game() {
  loadGame();
  setInterval(function () {
    saveGame();
    state.mps = state.mps + state.stats;
    mpsDisplay.innerText = state.mps;
    statsDisplay.innerText = state.stats;
  }, 1000);
}

function generateShop() {
  console.log(items);
  items.forEach(function (item) {
    const shopContainer = document.createElement("div");
    shopContainer.classList.add("shop-item");
  });

  let items = [
    { itemName: "Bookstore", cost: 10, increase: 2 },
    { itemName: "Gym Membership", cost: 50, increase: 3 },
    { itemName: "Brew tea", cost: 100, increase: 5 },
    { itemName: "Movie tickets", cost: 150, increase: 10 },
  ];

  const buyButton = document.createElement("button");
  buyButton.classList.add("buy-button");
  buyButton.innerText = "Buy";

  buyButton.addEventListener("click", function () {
    purchaseItem(items);
  });
}

generateShop();

let stats = [
  { statsKnowledge: "Knowledge", value: 0 },
  { statsHealth: "Health", value: 0 },
  { statsNutrition: "Nutrition", value: 0 },
  { statsHappiness: "Happiness", value: 0 },
];

function purchaseItem(itemParam) {
  if (itemParam.cost > state.mps) {
    alert("Not quite enough money to buy that yet.");
    return;
  }

  state.mps -= itemParam.cost;
  state.stats += itemParam.increase;
}

function loadGame() {
  console.log(localStorage.getItem("state"));
  if (localStorage.getItem("state") === null) {
    return;
  }
  state = JSON.parse(localStorage.getItem("state"));
}
game();

function resetGame() {
  localStorage.clear();
  state = {
    stats: 0,
    mps: 1,
    items: [],
  };
}

resetButton.addEventListener("click", resetGame);
