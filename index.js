let health = 200;
let maxHealth = 200;
let xp = 1;
let level = 1;

let strength = 15;
let dexterity = 8;
let intelligence = 12;
let defense = 10;
let magicDefense = 0;

let mana = 100;
let maxMana = 100;
let gold = 1000;
let isPurchased = false;
let isEquipped = false;
let weaponInventory = [];
let armorInventory = [];
let spellInventory = [];
let inventory = [];
let lootInventory = [];


let fighting;
let monsterHealth;

let currentWeaponIndex = 0;
let currentArmorIndex = 0;

/* let currentSpellIndex = 0; */

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

const hpNav = document.getElementById("hp-nav");
const hpNavText = document.getElementById("hp-nav-text");
const levelText = document.getElementById("level-text");

// const hpEl = document.getElementById("hp");
const hpText = document.getElementById("hp-text");
const manaText = document.getElementById("mp-text");
const xpText = document.getElementById("xp-text");
const strengthText = document.getElementById("strength-text");
const dexterityText = document.getElementById("dexterity-text");
const intelligenceText = document.getElementById("intelligence-text");
const defenseText = document.getElementById("defense-text");
const magicDefenseText = document.getElementById("magic-defense-text");

const hpBattle = document.getElementById("hpBattle");
const mpBattle = document.getElementById("mpBattle");
const hpBattleText = document.getElementById("hp-battle-text");
const mpBattleText = document.getElementById("mp-battle-text");

const goldEl = document.getElementById("gold");
const goldText= document.getElementById("gold-text");
const inventoryText = document.getElementById("inventory-text");

const buyHpBtn = document.getElementById("buy-health-btn");
const buyMpBtn = document.getElementById("buy-mana-btn");

const brassKnuckles = document.getElementById("brass-knuckles");
const claymore = document.getElementById("claymore");
const buyOakStaffBtn = document.getElementById("oak-staff");
const chainmail = document.getElementById("chainmail");
const buyHealBtn = document.getElementById("buy-heal")

const equipBrassKnuckles = document.getElementById("equip-brass-knuckles");
const equipClaymore = document.getElementById("equip-claymore");
const equipOakStaff = document.getElementById("equip-oak-staff");
const equipChainmail = document.getElementById("equip-chainmail");

const battleMenu = document.getElementById("battle-menu");
const battleTextBox = document.getElementById("battle-text-box");

const battleAttack = document.getElementById("battle-attack");
const battleAbandon = document.getElementById("battle-abandon");
const castSpell = document.getElementById("cast-spell");
const castFirebolt = document.getElementById("cast-firebolt");
const castHeal = document.getElementById("cast-heal");


const fightSlime = document.getElementById("slime");
const fightFangedBeast = document.getElementById("fanged-beast");
const fightEarthElemental = document.getElementById("earth-elemental");
const fightDragon = document.getElementById("dragon")

const monsterNameEl = document.getElementById("monster-name");
const monsterHealthEl = document.getElementById("monster-health");

const xpEl = document.getElementById("xp");


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
    cost: 30
},
{
    name: "Claymore",
    power: 25,
    cost: 100
},
    {
    name: "Oak Staff",
    power: 5,
    cost: 100,
    intBonus: 20
}];

const armor = [
    {
        name: "Leather Vest",
        defense: 1,
        cost: 0
    },
    {
        name: "Chainmail",
        defense: 15,
        cost: 100
    },
    {
        name: "Diamond Plate",
        defense: 40,
        cost: 300
    }
];

const spells = [
    {
        name: "firebolt",
        dmgAmount: 50,
        mpCost: 20
    },
    {
        name: "heal",
        healAmount: 50,
        mpCost: 30
    }
]

const monsters = [
{
    name: "Slime",
    level: 2,
    power: 5,
    health: 50,
    xp: 20,
    shout: `"Owph! Please don't hurt me" - lvl 1 Slime`
},
{
    name: "Fanged beast",
    level: 5,
    power: 7,
    health: 100,
    xp: 33
},
{
    name: "Earth Elemental",
    level: 10,
    power: 14,
    health: 200,
    xp: 50
}, 
{
    name: "Dragon",
    level: 25,
    power: 20,
    health: 500,
    xp: 200
 }
];

const lootTable = [
    "Potion of Healing",
    "Gold Ring",
    "Enchanted Gem",
    "Treasure Map",
    "Mystic Scroll"
];
// menu toggling

function statMenuToggle () {
    if (statContainer.style.visibility === "hidden") {
        statContainer.style.visibility = "visible";
        storeContainer.style.visibility = "hidden";
        inventoryContainer.style.visibility = "hidden";
        caveContainer.style.visibility = "hidden";
        battleAttack.style.display = "none";
        castSpell.style.display = "none";
        battleAbandon.style.display = "none";
        battleTextBox.innerText = "";
        monsterNameEl.innerText = "";
        monsterHealthEl.innerText = "";
        battleMenu.style.display = "none";
        battleTextBox.style.display = "none";
        fightSlime.style.visibility = "hidden";
        fightFangedBeast.style.visibility = "hidden";
        fightDragon.style.visibility = "hidden";
        fightEarthElemental.style.visibility = "hidden";
    } else {
        statContainer.style.visibility = "hidden";
        storeContainer.style.visibility = "hidden"
        inventoryContainer.style.visibility = "hidden";
        caveContainer.style.visibility = "hidden";
        battleAttack.style.display = "none";
        castSpell.style.display = "none";
        battleAbandon.style.display = "none";
        battleTextBox.innerText = "";
        monsterNameEl.innerText = "";
        monsterHealthEl.innerText = "";
        battleMenu.style.display = "none";
        battleTextBox.style.display = "none";
        fightSlime.style.visibility = "hidden";
        fightFangedBeast.style.visibility = "hidden";
        fightDragon.style.visibility = "hidden";
        fightEarthElemental.style.visibility = "hidden";
    }
}

function storeMenuToggle() {
    if (storeContainer.style.visibility === "hidden") {
        storeContainer.style.visibility = "visible";
        statContainer.style.visibility = "hidden";
        inventoryContainer.style.visibility = "hidden";
        caveContainer.style.visibility = "hidden";
        battleAttack.style.display = "none";
        castSpell.style.display = "none";
        battleAbandon.style.display = "none";
        battleTextBox.innerText = "";
        monsterNameEl.innerText = "";
        monsterHealthEl.innerText = "";
        battleMenu.style.display = "none";
        battleTextBox.style.display = "none";
        fightSlime.style.visibility = "hidden";
        fightFangedBeast.style.visibility = "hidden";
        fightDragon.style.visibility = "hidden";
        fightEarthElemental.style.visibility = "hidden";
       
    } else {
        storeContainer.style.visibility = "hidden";
        statContainer.style.visibility = "hidden";
        storeContainer.style.visibility = "hidden";
        caveContainer.style.visibility = "hidden";
        battleAttack.style.display = "none";
        castSpell.style.display = "none";
        battleAbandon.style.display = "none";
        battleTextBox.innerText = "";
        monsterNameEl.innerText = "";
        monsterHealthEl.innerText = "";
        battleMenu.style.display = "none";
        battleTextBox.style.display = "none";
        fightSlime.style.visibility = "hidden";
        fightFangedBeast.style.visibility = "hidden";
        fightDragon.style.visibility = "hidden";
        fightEarthElemental.style.visibility = "hidden";
    }
}

function inventoryMenuToggle() {
    if (inventoryContainer.style.visibility === "hidden") {
        inventoryContainer.style.visibility = "visible";
        statContainer.style.visibility = "hidden";
        storeContainer.style.visibility = "hidden";
        caveContainer.style.visibility = "hidden";
        battleAttack.style.display = "none";
        castSpell.style.display = "none";
        battleAbandon.style.display = "none";
        battleTextBox.innerText = "";
        monsterNameEl.innerText = "";
        monsterHealthEl.innerText = "";
        battleMenu.style.display = "none";
        battleTextBox.style.display = "none";
        fightSlime.style.visibility = "hidden";
        fightFangedBeast.style.visibility = "hidden";
        fightDragon.style.visibility = "hidden";
        fightEarthElemental.style.visibility = "hidden";
    } else {
        inventoryContainer.style.visibility = "hidden";
        statContainer.style.visibility = "hidden";
        storeContainer.style.visibility = "hidden"
        caveContainer.style.visibility = "hidden";
        battleAttack.style.display = "none";
        castSpell.style.display = "none";
        battleAbandon.style.display = "none";
        battleTextBox.innerText = "";
        monsterNameEl.innerText = "";
        monsterHealthEl.innerText = "";
        battleMenu.style.display = "none";
        battleTextBox.style.display = "none";
        fightSlime.style.visibility = "hidden";
        fightFangedBeast.style.visibility = "hidden";
        fightDragon.style.visibility = "hidden";
        fightEarthElemental.style.visibility = "hidden";
    }
}

function caveMenuToggle() {
    if (caveContainer.style.visibility === "hidden") {
        caveContainer.style.visibility = "visible";
        battleMenu.style.display = "none";
        battleTextBox.style.display = "none";
        battleAttack.style.display = "none";
        castSpell.style.display = "none";
        castFirebolt.style.display = "none";
        castHeal.style.display = "none"
        statContainer.style.visibility = "hidden";
        storeContainer.style.visibility = "hidden";
        inventoryContainer.style.visibility = "hidden"
        fightSlime.style.visibility = "visible";
        fightFangedBeast.style.visibility = "visible";
        fightDragon.style.visibility = "visible";
        fightEarthElemental.style.visibility = "visible";
        hpBattleText.innerText = health;
        mpBattleText.innerText = mana;
    } else {
        caveContainer.style.visibility = "hidden";
        statContainer.style.visibility = "hidden";
        storeContainer.style.visibility = "hidden";
        inventoryContainer.style.visibility = "hidden";
        battleMenu.style.display = "none";
        battleTextBox.style.display = "none";
        battleAttack.style.display = "none";
        castSpell.style.display = "none";
        castFirebolt.style.display = "none";
        castHeal.style.display = "none";
        battleAbandon.style.display = "none";
        fightSlime.style.visibility = "hidden";
        fightFangedBeast.style.visibility = "hidden";
        fightDragon.style.visibility = "hidden";  
        fightEarthElemental.style.visibility = "hidden";
    }
}

function spellListToggle () {
    if (castFirebolt.style.display  === "none" || castHeal.style.display === "none") {
    castFirebolt.style.display = "grid";
    castHeal.style.display = "grid";
    } else {
    castFirebolt.style.display = "none";
    castHeal.style.display = "none"
}
}

function potionsAnimationFunction () {
    potions.classList.add("fade-in-out");
}

function buyHealth () {
    if (gold >= 10) {
    gold -= 10;
    goldText.innerText = gold;
    health += 10;
    hpText.innerText = health;
    hpNavText.innerText = health;
    } else {
        textBoxEl.innerText = "You do not have enough gold!"
    }
}

function buyMana() {
    if (gold >= 20) {
        gold -= 20;
        goldText.innerText = gold;
        mana += 20;
        manaText.innerText = mana;
    }
}

function buyBrassKnuckles () {
    if (gold >= 30) {
    gold -= 30;
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
        textBoxEl.innerText = `You bought a Claymore!`;
    } else {
        textBoxEl.innerText = "You do not have enough gold!"
    }
}

function buyOakStaff () {
    if (gold >= 50) {
        gold -= 50;
        goldText.innerText = gold;
        isPurchased = true;
        buyOakStaffBtn.classList.add("purchased");
        buyOakStaffBtn.innerText = "Purchased";
        weaponInventory.push(weapons[3]);
        textBoxEl.innerText = `You bought an Oak Staff`;

    } else {
        textBoxEl.innerText = "You do not have enough gold!"
    }
}

function buyChainmail () {
    if (gold >= 100) {
        gold -= 100;
        goldText.innerText = gold;
        isPurchased = true;
        chainmail.classList.add("purchased");
        chainmail.innerText = "Purchased";
        armorInventory.push(armor[1]);
        textBoxEl.innerText = `You bought Chainmail!`;
        // inventoryText.innerText = `Armor inventory: ${armorInventory.map(w => w.name).join(", ")}`
    } else {
        textBoxEl.innerText = "You do not have enough gold!"
    }
}

function buyHeal () {
    if (gold >= 70) {
        gold -= 70;
        goldText.innerText = gold;
        isPurchased = true;
        buyHealBtn.classList.add("purchased");
        buyHealBtn.innerText = "Purchased";
        spellInventory.push(spells[1]);
        textBoxEl.innerText = "You bought Heal spell!"
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
        equipBrassKnuckles.innerText = "Brass Knuckles Equipped"
        equipClaymore.innerText = "Claymore";
        equipOakStaff.innerText = "Oak Staff";
        equipClaymore.classList.remove("equipped");
        equipOakStaff.classList.remove("equipped");
    } else {
        textBoxEl.innerText = `You have not yet purchased ${weapons[1].name}`
    }
}

function equipClaymoreFunction () {
    const hasClaymore = weaponInventory.some(w => w.name === "Claymore");
    if (hasClaymore) {
        currentWeaponIndex = 2;
        textBoxEl.innerText = `You have equipped ${weapons[currentWeaponIndex].name}`;
        equipClaymore.classList.add("equipped");
        equipClaymore.innerText = "Claymore Equipped";
        equipBrassKnuckles.innerText = "Brass Knuckles";
        equipOakStaff.innerText = "Oak Staff";
        equipBrassKnuckles.classList.remove("equipped");
        equipOakStaff.classList.remove("equipped");
    } else {
        textBoxEl.innerText = `You have not yet purchased ${weapons[2].name}`
    }
}

function equipOakStaffFunction () {
    const hasOakStaff = weaponInventory.some(w => w.name === "Oak Staff");
    if (hasOakStaff) {
        currentWeaponIndex = 3;
        textBoxEl.innerText = `You have equipped ${weapons[currentWeaponIndex].name}`;
        equipOakStaff.classList.add("equipped");
        equipOakStaff.innerText = "Oak Staff Equipped";
        equipBrassKnuckles.innerText = "Brass Knuckles";
        equipClaymore.innerText = "Claymore";
        equipBrassKnuckles.classList.remove("equipped");
        equipClaymore.classList.remove("equipped");
        // looking for a better way to factor in equipment dmgBonus in battle formulas
        intelligence += 300;
        intelligenceText.innerText = intelligence;
    } else {
        textBoxEl.innerHTML = `You have not yet purchased ${weapons[3].name}`;
    }
}

function equipChainmailFunction () {
    const hasChainmail = armorInventory.some(w => w.name === "Chainmail");
    if (hasChainmail) {
        currentArmorIndex = 1;
        textBoxEl.innerText = `You have equipped ${armor[currentArmorIndex].name}`;
        equipChainmail.classList.add("equipped");
        equipChainmail.innerText = "Chainmail Equipped";
    } else {
        textBoxEl.innerHTML = `You have not yet purchased ${armor[1].name}`;
    }
}

function fightSlimeFunction () {
    textBoxEl.classList.add("fade-in")
    caveContainer.style.visibility = "visible";
    battleAttack.style.display = "block";
    castSpell.style.display = "block";
    battleAbandon.style.display = "block";
    battleMenu.style.display = "grid";
    battleTextBox.style.display = "block";
    fightFangedBeast.style.visibility = "hidden";
    fightDragon.style.visibility = "hidden";    
    fightEarthElemental.style.visibility = "hidden";
    fighting = 0;
    monsterHealth = monsters[0].health;
    monsterHealthEl.innerText = monsters[0].health;
    monsterNameEl.innerText = monsters[0].name;
    textBoxEl.innerHTML = monsters[0].shout;
}

function fightFangedBeastFunction () {
    caveContainer.style.visibility = "visible";
    battleAttack.style.display = "block";
    castSpell.style.display = "block";
    battleAbandon.style.display = "block";
    battleMenu.style.display = "grid";
    battleTextBox.style.display = "block";
    fightSlime.style.visibility = "hidden";
    fightDragon.style.visibility = "hidden";
    fightEarthElemental.style.visibility = "hidden";
    fighting = 1;
    monsterHealth = monsters[1].health;
    monsterNameEl.innerText = monsters[1].name;
    monsterHealthEl.innerText = monsters[1].health;
}

function fightEarthElementalFunction () {
    caveContainer.style.visibility = "visible";
    battleAttack.style.display = "block";
    castSpell.style.display = "block";
    battleAbandon.style.display = "block";
    battleMenu.style.display = "grid";
    battleTextBox.style.display = "block";
    fightSlime.style.visibility = "hidden";
    fightFangedBeast.style.visibility = "hidden"
    fightDragon.style.visibility = "hidden";
    fighting = 2;
    monsterHealth = monsters[2].health;
    monsterNameEl.innerText = monsters[2].name;
    monsterHealthEl.innerText = monsters[2].health;
}

function fightDragonFunction () {
    caveContainer.style.visibility = "visible";
    battleAttack.style.display = "block";
    castSpell.style.display = "block";
    battleAbandon.style.display = "block";
    battleMenu.style.display = "grid";
    battleTextBox.style.display = "block";
    fightSlime.style.visibility = "hidden";
    fightFangedBeast.style.visibility = "hidden";
    fightEarthElemental.style.visibility = "hidden";
    fighting = 3;
    monsterHealth = monsters[3].health;
    monsterNameEl.innerText = monsters[3].name;
    monsterHealthEl.innerText = monsters[3].health;
}

function updateBattleHpMp () {
    hpBattleText.innerText = health;
    mpBattleText.innerText = mana;
    hpText.innerText = health;
    manaText.innerText = mana;
}

function getMonsterAttackValue(level) {
    const hit = (level * 6) - armor[currentArmorIndex].defense - defense;
    return Math.max(0, hit)
}
    
function attackMonster () {
    const damage = weapons[currentWeaponIndex].power + strength;
    const monsterDamage = getMonsterAttackValue(monsters[fighting].power); 
    health = Math.max (0, health - monsterDamage);
    monsterHealth = monsterHealth - damage;
    updateBattleHpMp();
    if (health <= 0) {
        lose();
        return;
    }
    if (monsterHealth <= 0) {
        textBoxEl.innerText = `You defeated the ${monsters[fighting].name}`
        defeatMonster();
        return
    } else { 
    monsterHealthEl.innerText = monsterHealth;
    battleTextBox.innerText = `You attack the ${monsters[fighting].name} with your ${weapons[currentWeaponIndex].name}\n You deal ${damage} damage!\n The ${monsters[fighting].name} deals ${monsterDamage} damage to you.`;
    battleTextBox.style.display = "block";
    }
}
    // deleted dragon conditional to test if it would improve bug, it did not
function castFireboltFunction () {
        mana -= 20;
        manaText.innerText = mana;
        mpBattleText.innerText = mana;
        let fireBoltDmg = spells[0].dmgAmount + intelligence;
        const monsterDamage = getMonsterAttackValue(monsters[fighting].power); 
    health = Math.max (0, health - monsterDamage);
    monsterHealth = monsterHealth - fireBoltDmg;
    updateBattleHpMp();
    battleTextBox.innerText = `You cast a firebolt at the ${monsters[fighting].name}\n You deal ${fireBoltDmg} damage.\n The ${monsters[fighting].name} deals ${monsterDamage} to you.`;
    if (health <= 0) {
        lose();
    }
    if (monsterHealth <= 0) {
        textBoxEl.innerText = `You defeated ${monsters[fighting].name}!`
        defeatMonster()
    } else {
        battleTextBox.innerText = "You do not have enough mana!";
    }
}

function castHealFunction () {
    if (mana >= 30) {
    mana -= 30;
    let healAmount = spells[1].healAmount + intelligence;
    let missingHealth = maxHealth - health;
    let actualHealed = Math.min(healAmount, missingHealth);
    health += actualHealed;
    updateBattleHpMp();
    battleTextBox.innerText = `You cast Heal and recover ${actualHealed} hp!`;
    manaText.innerText = mana;
    if (health > maxHealth) {
    health = maxHealth;
    hpText.innerText = maxHealth;
    hpNavText.innerText = maxHealth;
    manaText.innerText = mana;
}
} else {
    battleTextBox.innerText = "You do not have enough mana!";
}
}
/*
function isMonsterHit () {
    return Math.random() < .95 || health < 20
}
    */
function battleAbandonFunction () {
    battleAttack.style.display = "none";
    castSpell.style.display = "none";
    battleAbandon.style.display = "none";
    battleMenu.style.display = "none";
    battleTextBox.style.display = "none";
    fightSlime.style.visibility = "hidden";
    fightFangedBeast.style.visibility = "hidden";
    fightDragon.style.visibility = "hidden";
    textBoxEl.innerText = `You ran away from the ${monsters[fighting].name}`
}

function defeatMonster() {
    gold += Math.floor(monsters[fighting].level * 6.7);
    goldText.innerText = gold;
    let gainedXp = monsters[fighting].xp; 
    xp += gainedXp;
    xpText.innerText = xp;
    let leveledUp = false;
    while (xp >= 100) {
        levelUp();
        xp -= 100;
        leveledUp = true
    } 
    xpText.innerText = xp;
    if (leveledUp) {
        textBoxEl.innerText = `The ${monsters[fighting].name} dies! You leveled up! Str, Dex, Int +10, Defense & Magic Defense +5`;
    } else {
        textBoxEl.innerText = `You defeated the ${monsters[fighting].name}! You gained ${gainedXp} xp.`;
    }
    monsterLoot()
    battleTextBox.style.display = "block";
    battleAttack.style.display = "none";
    setTimeout(() => {
        battleAttack.style.display = "none";
        castSpell.style.display = "none";
        castFirebolt.style.display = "none";
        castHeal.style.display = "none";
        battleAbandon.style.display = "none";
        battleMenu.style.display = "none";
       // battleTextBox.style.display = "none";
        fightSlime.style.visibility = "visible";
        fightFangedBeast.style.visibility = "visible";
        fightDragon.style.visibility = "visible";
        fightEarthElemental.style.visibility = "visible";
    }, 800); 
    
};
    
function monsterLoot() {
    if (Math.random() < 0.5) {
        const loot = lootTable[Math.floor(Math.random() * lootTable.length)];
        lootInventory.push(loot);
        textBoxEl.innerText += `\nYou found a ${loot}!`;
        return loot
    } else {
        return null;
    }
}
    

function levelUp () {
    strength += 5;
    strengthText.innerText = strength;
    dexterity += 5;
    dexterityText.innerText = dexterity;
    intelligence += 5;
    intelligenceText.innerText = intelligence;
    defense += 5;
    defenseText.innerText = defense;
    magicDefense += 5;
    magicDefenseText.innerText = magicDefense;
    level ++;
    levelText.innerText = level;
    health += 50;
    maxHealth += 50;
    hpText.innerText = health;
    hpBattleText.innerText = health;
    mana += 40;
    maxMana += 40;
    manaText.innerText = mana;
    mpBattleText.innerText = mana;
}

function lose () {
    battleAttack.style.display = "none";
    castSpell.style.display = "none";
    battleAbandon.style.display = "none";
    battleMenu.style.display = "none";
    gold = 100;
    goldText.innerText = gold;
    health = 100;
    hpText.innerText = health;
    currentWeaponIndex = 0;
    weaponInventory = ["stick"];
    inventory = ["stick"];
    textBoxEl.innerText = `${monsters[fighting].name} has killed you! New game?`;
    // battleTextBox.style.display = "block";
    setTimeout(() => {
        battleTextBox.style.display = "none";
        restartButton.style.visibility = "visible";
    }, 800);
}
    
function winGame () {
    battleAttack.style.display = "none";
    castSpell.style.display = "none";
    battleAbandon.style.display = "none";
    battleMenu.style.display = "none";
    battleTextBox.style.display = "none";
    textBoxEl.innerText = `You have slain the dragon! You have won the game! Would you like to play a new game?`;
    restartButton.style.visibility = "visible";
    level = 1;
}

function restart() {
    level = 1;
    gold = 100;
    goldText.innerText = gold;
    health = 100;
    hpText.innerText = health;
    xp = 0;
    xpText.innerText = xp;
    currentWeaponIndex = 0;
    weapons[0].isPurchased = false;
    weapons[1].isPurchased = false;
    weapons[0].isEquipped = false;
    weapons[1].isEquipped = false;
    weaponInventory = ["stick"];
    inventory = ["stick"];
    restartButton.style.visibility = "hidden";
    textBoxEl.innerText = ``;
    battleTextBox.innerText = ``;
    fightSlime.style.visibility = "hidden";
    fightFangedBeast.style.visibility = "hidden";
    fightEarthElemental.style.visibility = "hidden";
    fightDragon.style.visibility = "hidden";
    hpBattleText.style.visibility = "hidden";
    mpBattleText.style.visibility = "hidden";
    hpBattle.style.visibility = "hidden";
    mpBattle.style.visibility = "hidden";
}

// Event listeners
// toggle events
stats.addEventListener("click", statMenuToggle);
store.addEventListener("click", storeMenuToggle);
inventoryEl.addEventListener("click", inventoryMenuToggle);
cave.addEventListener("click", caveMenuToggle);


brassKnuckles.addEventListener("click", buyBrassKnuckles);
claymore.addEventListener("click", buyClaymore);
chainmail.addEventListener("click", buyChainmail);
buyOakStaffBtn.addEventListener("click", buyOakStaff);
buyHealBtn.addEventListener("click", buyHeal);

equipBrassKnuckles.addEventListener("click", equipBrassKnucklesFunction);
equipClaymore.addEventListener("click", equipClaymoreFunction);
equipOakStaff.addEventListener("click", equipOakStaffFunction);
equipChainmail.addEventListener("click", equipChainmailFunction);

potions.addEventListener("click", potionsAnimationFunction)
buyHpBtn.addEventListener("click", buyHealth);
buyMpBtn.addEventListener("click", buyMana);

fightSlime.addEventListener("click", fightSlimeFunction);
fightFangedBeast.addEventListener("click", fightFangedBeastFunction);
fightEarthElemental.addEventListener("click", fightEarthElementalFunction)
fightDragon.addEventListener("click", fightDragonFunction);

battleAttack.addEventListener("click", attackMonster);
castSpell.addEventListener("click", spellListToggle);
castFirebolt.addEventListener("click", castFireboltFunction)
castHeal.addEventListener("click", castHealFunction);
battleAbandon.addEventListener("click", battleAbandonFunction);

restartButton.addEventListener("click", restart);
