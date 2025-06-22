let health = 100;
let mana = 20;
let gold = 1000;
let isPurchased = false;
let weaponInventory = [];

const textBoxEl = document.getElementById("text-box");

const hpEl = document.getElementById("hp");
const hpText = document.getElementById("hp-text");
const manaText = document.getElementById("mp-text");

const buyHpBtn = document.getElementById("buy-health-btn");
const buyMpBtn = document.getElementById("buy-mana-btn");
const goldEl = document.getElementById("gold");
const goldText= document.getElementById("gold-text");
const inventoryText = document.getElementById("inventory-text");
const brassKnuckles = document.getElementById("brass-knuckles");
const claymore = document.getElementById("claymore");

function buyHealth () {
    if (gold >= 10) {
    gold -= 10;
    goldText.innerText = gold;
    health += 10;
    hpText.innerText = health;
    } else {
        textBoxEl.innerText = "You do not have enough gold!"
    }
}

buyHpBtn.addEventListener("click", buyHealth);

function buyMana() {
    if (gold >= 20) {
        gold -= 20;
        goldText.innerText = gold;
        mana += 20;
        manaText.innerText = mana;
    }
}

buyMpBtn.addEventListener("click", buyMana);

const weapons = [{
    name: "Brass Knuckles",
    power: 10,
    cost: 20
},
{
    name: "Claymore",
    power: 30,
    cost: 100
}]

function buyBrassKnuckles () {
    if (gold >= 20) {
    gold -= 20;
    isPurchased = true;
    brassKnuckles.classList.add("purchased");
    brassKnuckles.innerText = "Purchased";    
    weaponInventory.push(weapons[0]);
    textBoxEl.innerText = `You bought Brass Knuckles!` 
    inventoryText.innerText = `In your inventory you have: ${weaponInventory.map(w => w.name).join(", ")}`;
    } else {
        textBoxEl.innerText = "You do not have enough gold!"
    }
}

function buyClaymore () {
    if (gold >= 100) {
        gold -= 100;
        isPurchased = true;
        claymore.classList.add("purchased");
        claymore.innerText = "Purchased";
        weaponInventory.push(weapons[1]);
        textBoxEl.innerText = `You bought a Claymore!` 
        inventoryText.innerText = `In your inventory you have: ${weaponInventory.map(w => w.name).join(", ")}`;
    } else {
        textBoxEl.innerText = "You do not have enough gold!"
    }
}


brassKnuckles.addEventListener("click", buyBrassKnuckles);
claymore.addEventListener("click", buyClaymore)
