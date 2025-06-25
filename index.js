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

const stats = document.getElementById("stats");
const store = document.getElementById("store");
const inventoryEl = document.getElementById("inventory");
const cave = document.getElementById("cave");

const statContainer = document.getElementById("stats-container");
const storeContainer = document.getElementById("store-container");
const inventoryContainer = document.getElementById("inventory-container");
const caveContainer = document.getElementById("cave-container");

const textBoxEl = document.getElementById("text-box");
const restartButton = document.getElementById("restart-button");

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
const equipClaymore = document.getElementById("equip-claymore");

const battleTextBox = document.getElementById("battle-text-box");


const battleAttack = document.getElementById("battle-attack");
const battleDodge = document.getElementById("battle-dodge");
const battleAbandon = document.getElementById("battle-abandon");
const fightSlime = document.getElementById("slime");
const fightFangedBeast = document.getElementById("fanged-beast");
const fightDragon = document.getElementById("dragon")
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


// menu toggling

function statMenuToggle () {
    if (statContainer.style.visibility === "hidden") {
        statContainer.style.visibility = "visible";
        storeContainer.style.visibility = "hidden";
        inventoryContainer.style.visibility = "hidden";
        caveContainer.style.visibility = "hidden";
    } else {
        statContainer.style.visibility = "hidden";
        storeContainer.style.visibility = "hidden"
        inventoryContainer.style.visibility = "hidden";
        caveContainer.style.visibility = "hidden";
    }
}

function storeMenuToggle() {
    if (storeContainer.style.visibility === "hidden") {
        storeContainer.style.visibility = "visible";
        statContainer.style.visibility = "hidden";
        inventoryContainer.style.visibility = "hidden";
        caveContainer.style.visibility = "hidden";
    } else {
        storeContainer.style.visibility = "hidden";
        statContainer.style.visibility = "hidden";
        storeContainer.style.visibility = "hidden";
        caveContainer.style.visibility = "hidden";
    }
}

function inventoryMenuToggle() {
    if (inventoryContainer.style.visibility === "hidden") {
        inventoryContainer.style.visibility = "visible";
        statContainer.style.visibility = "hidden";
        storeContainer.style.visibility = "hidden";
        caveContainer.style.visibility = "hidden"
    } else {
        inventoryContainer.style.visibility = "hidden";
        statContainer.style.visibility = "hidden";
        storeContainer.style.visibility = "hidden"
        caveContainer.style.visibility = "hidden";
    }
}

function caveMenuToggle() {
    if (caveContainer.style.visibility === "hidden") {
        caveContainer.style.visibility = "visible";
        statContainer.style.visibility = "hidden";
        storeContainer.style.visibility = "hidden";
        inventoryContainer.style.visibility = "hidden"
    } else {
        caveContainer.style.visibility = "hidden";
        statContainer.style.visibility = "hidden";
        storeContainer.style.visibility = "hidden";
        inventoryContainer.style.visibility = "hidden";
    }
}

function buyBrassKnuckles () {
    if (gold >= 20) {
    gold -= 20;
    goldText.innerText = gold;
    isPurchased = true;
    brassKnuckles.classList.add("purchased");
    brassKnuckles.innerText = "Purchased";    
    weaponInventory.push(weapons[1]);
    ;
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

function equipClaymoreFunction () {
    const hasClaymore = weaponInventory.some(w => w.name === "Claymore");
    if (hasClaymore) {
        currentWeaponIndex = 2;
        textBoxEl.innerText = `You have equipped ${weapons[currentWeaponIndex].name}`;
        equipClaymore.classList.add("equipped");
    } else {
        textBoxEl.innerText = `You have not yet purchased ${weapons[2]}`
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

function fightFangedBeastFunction () {
    battleAttack.style.visibility = "visible";
    battleDodge.style.visibility = "visible";
    battleAbandon.style.visibility = "visible";
    fighting = 1;
    monsterHealth = monsters[1].health;
    monsterNameEl.innerText = monsters[1].name;
    monsterHealthEl.innerText = monsters[1].health;
}

function fightDragonFunction () {
    battleAttack.style.visibility = "visible";
    battleDodge.style.visibility = "visible";
    battleAbandon.style.visibility = "visible";
    fighting = 2;
    monsterHealth = monsters[2].health;
    monsterNameEl.inventoryText = monsters[2].name;
    monsterHealthEl.innerText = monsters[2].health;
}

function getMonsterAttackValue(level) {
	const hit = (level * 5) - (Math.floor(Math.random() * xp));
	return hit
}
    
function attackMonster () {
   const damage = weapons[currentWeaponIndex].power + Math.floor(Math.random() * xp) + 1;
   monsterHealthEl.innerText = monsterHealth;
    health -= getMonsterAttackValue(monsters[fighting].level);
    hpText.innerText = health;
    if (isMonsterHit()) {
         monsterHealth -= damage;
    } else {
        textBoxEl.innerText = `You miss.`;
    }
    battleTextBox.innerText = `The ${monsters[fighting].name} attacks! You attack it with your ${weapons[currentWeaponIndex].name}`;  
    if (health <= 0) {
        lose()
    } 
     else if (monsterHealth <= 0) {
        if (fighting === 2) {
            winGame();
        } else {
        defeatMonster();
    }   
}
}

function isMonsterHit () {
    return Math.random() < .85 || health < 20
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

function lose () {
    gold = 100;
    goldText.innerText = gold;
    health = 100;
    hpText.innerText = health;
    currentWeaponIndex = 0;
    weaponInventory = ["stick"];
    inventory = ["stick"];
    textBoxEl.innerText = `${monsters[fighting].name} has killed you! New game?`;
    restartButton.style.visibility = "visible";
}

function winGame () {
    textBoxEl.innerText = `You have slain the dragon! You have won the game! Would you like to play a new game?`;
    restartButton.style.visibility = "visible";
}

function restart() {
    gold = 100;
    goldText.innerText = gold;
    health = 100;
    hpText.innerText = health;
    xp = 0;
    xpText.innerText = xp;
    currentWeaponIndex = 0;
    weaponInventory = ["stick"];
    inventory = ["stick"];
    restartButton.style.visibility = "hidden";
    textBoxEl.innerText = ``;
    battleTextBox.innerText = ``;
}

// Event listeners
stats.addEventListener("click", statMenuToggle);
store.addEventListener("click", storeMenuToggle);
inventoryEl.addEventListener("click", inventoryMenuToggle);
cave.addEventListener("click", caveMenuToggle);


brassKnuckles.addEventListener("click", buyBrassKnuckles);
equipBrassKnuckles.addEventListener("click", equipBrassKnucklesFunction);
equipClaymore.addEventListener("click", equipClaymoreFunction)
claymore.addEventListener("click", buyClaymore);
buyMpBtn.addEventListener("click", buyMana);
fightSlime.addEventListener("click", fightSlimeFunction);
fightFangedBeast.addEventListener("click", fightFangedBeastFunction);
fightDragon.addEventListener("click", fightDragonFunction)
battleAttack.addEventListener("click", attackMonster);
restartButton.addEventListener("click", restart);
