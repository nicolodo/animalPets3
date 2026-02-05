console.log("This is the Pet Animal Page");

// Key: mps = money per second
// key: stats = attributes of pet
// Key: items = shop items to buy
let state = {
  money: 100,
  mps: 1,
  items: [],
  stats: [],
  settings: [],
};

let stats = [
  // "knowledge"= 0,
  // "Health"=0,
  // "Nutrition"=0,
  // "Happiness"=0
  { statsName: "Knowledge", statsValue: 0 },
  { statsName: "Health", statsValue: 0 },
  { statsName: "Nutrition", statsValue: 0 },
  { statsName: "Happiness", statsValue: 0 },
];

const item = [
  { itemName: "Bookstore", cost: 10, itemIncrease: 2 , stat: "Knowledge", numberBought: 0},
  { itemName: "Gym Membership", cost: 50, itemIncrease: 3 , stat: "Health", numberBought: 0},
  { itemName: "Brew tea", cost: 100, itemIncrease: 5 , stat: "Nutrition", numberBought: 0},
  { itemName: "Movie tickets", cost: 150, itemIncrease: 10 , stat: "Happiness", numberBought: 0},
];

const image = document.querySelector("img");
const moneyDisplay = document.getElementById("money");
const mpsDisplay = document.getElementById("mps");
const statsDisplay = document.getElementById("stats");
const shop = document.getElementById("shop");
let saveGame = document.getElementById("saveGame");

function game() {
  // loadGame();
  // let i=1;
  setInterval(function () {
    state.money += state.mps //+ state.stats;
    // console.log("hello",i)
    // i++
    updateText();
  }, 1000);
}

function updateText() {
    // mpsDisplay.innerText = state.mps;
    mpsDisplay.innerText = 'MPS:'+String(state.mps);
    moneyDisplay.innerText = 'Money:'+String(state.money);

    // item.forEach(item) {
    //   // item
    // }
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
    // itemContainer.id = item.itemName;

    const itemName = document.createElement("p");
    itemName.innerText = item.itemName;

    const itemCost = document.createElement("p");
    itemCost.innerText = "Cost: " + item.cost;

    const itemIncrease = document.createElement("p");
    itemIncrease.innerText = "Increase: " + item.itemIncrease;

    const numberBought = document.createElement("p");
    numberBought.innerText = "number bought: " + item.numberBought;

    const buyButton = document.createElement("button");
    buyButton.classList.add("buy-button");
    buyButton.innerText = "Buy";

    buyButton.addEventListener("click", function () {
      purchaseItem(item);
      updateText();
    });

    itemContainer.append(itemName, itemCost, itemIncrease, numberBought, buyButton);

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
  console.log("purchaseItem()")
  console.log("money:",state.money)
  console.log("item cost:",itemParam.cost)
  if (state.money > itemParam.cost) {
    // alert("Not quite enough money to buy that yet.");
    state.money -= itemParam.cost
    state.mps += itemParam.itemIncrease
    console.log("You bought a ",itemParam.itemName)
    // stats
  } else {
  // if (itemParam.cost < state.money) {
    // return;
    prompt("you cannot afford that!");
    console.log("you are short by:",(itemParam.cost - state.money))
  }
  updateText();

  // state.mps -= itemParam.cost;
  // state.mps = +itemParam.increase;
  // state.stats += itemParam.increase;
}

game()