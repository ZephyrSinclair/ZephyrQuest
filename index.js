let health = 100;
let xp = 1;

let mana = 20;
let gold = 1000;
let isPurchased = false;
let weaponInventory = [];
let inventory = [];
let isEquipped = false;

let fighting;
let monsterHealth;

let currentWeaponIndex = 0;

const textBoxEl = document.getElementById("text-box");

const hpEl = document.getElementById("hp");
const hpText = document.getElementById("hp-text");
const manaText = document.getElementById("mp-text");
const xpText = document.getElementById("xp-text");

const buyHpBtn = document.getElementById("buy-health-btn");
const buyMpBtn = document.getElementById("buy-mana-btn");
const goldEl = document.getElementById("gold");
const goldText= document.getElementById("gold-text");
const inventoryText = document.getElementById("inventory-text");
const brassKnuckles = document.getElementById("brass-knuckles");
const claymore = document.getElementById("claymore");

const equipBrassKnuckles = document.getElementById("equip-brass-knuckles");

const battleTextBox = document.getElementById("battle-text-box");


const battleAttack = document.getElementById("battle-attack");
const battleDodge = document.getElementById("battle-dodge");
const battleAbandon = document.getElementById("battle-abandon");
const fightSlime = document.getElementById("slime");
const monsterNameEl = document.getElementById("monster-name");
const monsterHealthEl = document.getElementById("monster-health");

const xpEl = document.getElementById("xp");

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



// Objects
const weapons = [
    {
    name: "Stick",
    power: 2,
    cost: 0
    },
    {
    name: "Brass Knuckles",
    power: 10,
    cost: 20
},
{
    name: "Claymore",
    power: 30,
    cost: 100
}]

const monsters = [
{
	name: "slime",
	level: 2,
	health: 15
},
{
    name: "fanged beast",
    level: 8,
    health: 60
}, 
{
    name: "dragon",
    level: 20,
    health: 300
 }
];

function buyBrassKnuckles () {
    if (gold >= 20) {
    gold -= 20;
    goldText.innerText = gold;
    isPurchased = true;
    brassKnuckles.classList.add("purchased");
    brassKnuckles.innerText = "Purchased";    
    weaponInventory.push(weapons[1]);
    equipBrassKnuckles.style.visibility = "visible";
    textBoxEl.innerText = `You bought Brass Knuckles!`; 
    inventoryText.innerText = `Inventory: ${weaponInventory.map(w => w.name).join(", ")}`;
    } else {
        textBoxEl.innerText = "You do not have enough gold!"
    }
}

function buyClaymore () {
    if (gold >= 100) {
        gold -= 100;
        goldText.innerText = gold;
        isPurchased = true;
        claymore.classList.add("purchased");
        claymore.innerText = "Purchased";
        weaponInventory.push(weapons[2]);
        textBoxEl.innerText = `You bought a Claymore!` 
        inventoryText.innerText = `Inventory: ${weaponInventory.map(w => w.name).join(", ")}`;
    } else {
        textBoxEl.innerText = "You do not have enough gold!"
    }
}

function equipBrassKnucklesFunction () {
    const hasBrassKnuckles = weaponInventory.some(w => w.name === "Brass Knuckles");
    if (hasBrassKnuckles) {
        currentWeaponIndex = 1;
        textBoxEl.innerText = `You have equipped ${weapons[currentWeaponIndex].name}`;
        equipBrassKnuckles.classList.add("equipped");
    } else {
        textBoxEl.innerText = `You have not yet purchased ${weapons[1]}`
    }
}

function fightSlimeFunction () {
    battleAttack.style.visibility = "visible";
    battleDodge.style.visibility = "visible";
    battleAbandon.style.visibility = "visible";
    fighting = 0;
    monsterHealth = monsters[0].health;
    monsterNameEl.innerText = monsters[0].name;
    monsterHealthEl.innerText = monsters[0].health;

}



function getMonsterAttackValue(level) {
	const hit = (level * 5) - (Math.floor(Math.random() * xp));
	return hit
}
    


function attackMonster () {
   const damage = weapons[currentWeaponIndex].power + Math.floor(Math.random() * xp) + 1;
   monsterHealth -= damage;
   monsterHealthEl.innerText = monsterHealth;
    health -= getMonsterAttackValue(monsters[fighting].level);
    hpText.innerText = health;
    battleTextBox.innerText = `The ${monsters[fighting].name} attacks! You attack it with your ${weapons[currentWeaponIndex].name}`;  
     if (monsterHealth <= 0) {
        defeatMonster();
    }
}

function defeatMonster() {
    gold += Math.floor(monsters[fighting].level * 6.7);
    goldText.innerText = gold;
    xp += monsters[fighting].level;
    xpText.innerText = xp;
    battleTextBox.innerText = `You defeated the ${monsters[fighting].name}!`;
    battleAttack.style.visibility = "hidden";
    battleDodge.style.visibility = "hidden";
    battleAbandon.style.visibility = "hidden";
}

// Event listeners
brassKnuckles.addEventListener("click", buyBrassKnuckles);
equipBrassKnuckles.addEventListener("click", equipBrassKnucklesFunction);
claymore.addEventListener("click", buyClaymore);
buyMpBtn.addEventListener("click", buyMana);
fightSlime.addEventListener("click", fightSlimeFunction);
battleAttack.addEventListener("click", attackMonster);
