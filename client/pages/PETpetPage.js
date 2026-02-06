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
  { itemName: "Book", cost: 10, itemIncrease: 2 , stat: "Knowledge", numberBought: 0},
  { itemName: "Gym Membership", cost: 250, itemIncrease: 3 , stat: "Health", numberBought: 0},
  { itemName: "Tea", cost: 1000, itemIncrease: 5 , stat: "Nutrition", numberBought: 0},
  { itemName: "Movie ticket", cost: 2000, itemIncrease: 10 , stat: "Happiness", numberBought: 0},
];

const image = document.querySelector("img");
const moneyDisplay = document.getElementById("money");
const mpsDisplay = document.getElementById("mps");
const statsDisplay = document.getElementById("stats");
const shop = document.getElementById("shop");
let saveGame = document.getElementById("saveGame");

let log1 = document.getElementById("log1");
let log2 = document.getElementById("log2");
let log3 = document.getElementById("log3");

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
  updateLog("Here's coin "+ state.money + " for petting your pet!")
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
      if (purchaseItem(item)) {
        item.numberBought++;
        numberBought.innerText ="number bought: " + item.numberBought;
      };
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
    updateLog("You bought a " + itemParam.itemName)
    // stats
    return true
  } else {
  // if (itemParam.cost < state.money) {
    // return;
    // log.innerHTML = ("Log: you cannot afford that!");
    // log.innerHTML = ("you are short by: " + String(itemParam.cost - state.money))
    updateLog("you are short by: " + String(itemParam.cost - state.money))
    return false
  }
  updateText();

  // state.mps -= itemParam.cost;
  // state.mps = +itemParam.increase;
  // state.stats += itemParam.increase;
}

function updateLog(newString){
  log1.innerHTML = log2.innerHTML
  log2.innerHTML = log3.innerHTML
  log3.innerHTML = "Log: " + newString
}

game()