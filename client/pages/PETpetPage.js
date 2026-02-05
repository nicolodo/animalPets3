console.log("This is the Pet Animal Page");

// Key: mps = money per second
// key: stats = attributes of pet
// Key: items = shop items to buy
let state = {
  money: 0,
  mps: 1,
  items: [],
  stats: [],
  settings: [],
};

let stats = [
  { statsName: "Knowledge", statsValue: 0 },
  { statsName: "Health", statsValue: 0 },
  { statsName: "Nutrition", statsValue: 0 },
  { statsName: "Happiness", statsValue: 0 },
];

const item = [
  { itemName: "Bookstore", itemCost: 10, itemIncrease: 2 },
  { itemName: "Gym Membership", itemCost: 50, itemIncrease: 3 },
  { itemName: "Brew tea", itemCost: 100, itemIncrease: 5 },
  { itemName: "Movie tickets", itemCost: 150, itemIncrease: 10 },
];

const image = document.querySelector("img");
const moneyDisplay = document.getElementById("money");
const mpsDisplay = document.getElementById("mps");
const statsDisplay = document.getElementById("stats");
const shop = document.getElementById("shop");
let saveGame = document.getElementById("saveGame");

function game() {
  loadGame();
  setInterval(function () {
    state.mps = state.mps //+ state.stats;
    mpsDisplay.innerText = state.mps;
    statsDisplay.innerText = state.stats;
    moneyDisplay.innerText = state.money;
  }, 1000);
}

image.addEventListener("click", function () {
  state.money++;
  moneyDisplay.innerText = 'Money:'+String(state.money);
  console.log(state.money);
});



function generateShop() {
  item.forEach(function (item) {
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("shop-item");

    const itemName = document.createElement("p");
    itemName.innerText = item.itemName;

    const itemCost = document.createElement("p");
    itemCost.innerText = "Cost: " + item.itemCost;

    const itemIncrease = document.createElement("p");
    itemIncrease.innerText = "Increase: " + item.itemIncrease;

    const buyButton = document.createElement("button");
    buyButton.classList.add("buy-button");
    buyButton.innerText = "Buy";

    buyButton.addEventListener("click", function () {
      purchaseItem(item);
    });

    itemContainer.append(itemName, itemCost, itemIncrease, buyButton);

    shop.append(itemContainer);
  });

  console.log(item);

  // const buyButton = document.createElement("button");
  // buyButton.classList.add("buy-button");
  // buyButton.innerText = "Buy";

  // buyButton.addEventListener("click", function () {
  //   purchaseItem(items);
  // });
}

generateShop();

function generateStats() {
  stats.forEach(function (stats) {
    const statsContainer = document.createElement("div");
    statsContainer.classList.add("stats-item");

    const statsName = document.createElement("p");
    statsName.innerText = stats.statsName;

    const statsValue = document.createElement("p");
    statsValue.innerText = stats.statsValue;

    statsContainer.append(statsName, statsValue);
    statsDisplay.append(statsContainer);
  });
}

generateStats();

function purchaseItem(itemParam) {
  if (itemParam.cost > state.mps) {
    alert("Not quite enough money to buy that yet.");
    return;
  }

  state.mps -= itemParam.cost;
  state.mps = +itemParam.increase;
  state.stats += itemParam.increase;
}
