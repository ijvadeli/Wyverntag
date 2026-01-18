const logField = document.getElementById("Log");
const infoField = document.getElementById("infoField");

const placeholder = "souls";

//* Function for handling time (Log)
function timeLog() {
    setTimeout(5000)
    let t = new Date();
    let h = t.getHours();
    let m = t.getMinutes();
    let s = t.getSeconds();

    const timeString = h + ":" + (m < 10 ? '0' + m : m) + ":" + (s < 10 ? '0' + s : s);
    return timeString;
}
setInterval(timeLog(), 1000)

//* Function for selecting something random from array
function randomItem(array) {
    if (array.length === 0) {
        return null; // Who would put 0 items in an array anyway..?
    }
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

//* Arrays with random content for enemies, loot, etc.
// Location
const land = ["Maevia", "Oceanius", "Frysia", "Draconia", "Wyvernden", "Landorian", "Bordor", "Duranthia", "Bosniura"];
const biome = ["Hills", "Mountains", "Rivers", "Forest", "Village", "Castle", "Wasteland", "Farms", "Caves"];
// Enemy
const title = ["Almighty", "Weak", "Trickster", "Foolish", "Evil", "Peaceful"];
const type = ["Mythical", "Forest", "Shadow", "Cursed", "Dragonkin", "Fey", "Undead", "Celestial", "Demonic", "Ancient", "Ice", "Vengeful", "Forest", "Cave", "Mountain", "Ocean", "Storm", "Desert", "Nightmare"];
//! Enemy race
const race = ["Orc", "Dragon", "Wyvern", "Gnome", "Skeleton", "Bandit", "Witch", "Mage", "Sorceress", "Golem", "Warlord", "Defender", "Wraith", "Spirit", "Troll", "Thief", "Siren", "Elemental", "Behemoth", "King", "Queen"];
// Loot drops (randomizer system too)
const rarity = ["Common", "Uncommon", "Rare", "Epic", "Legendary", "Mythical"];
const effect = ["Divine", "Dark", "Broken", "Banished"];
const items = ["Pizza", "Bread", "Arrows", "Health Potion", "Stamina Potion", "Mysterious Potion", "Sword", "Spear", "Axe", "Bow", "Dagger", "Katana", "Greatsword"];

//* Weaknesses off enemies
const weaknesses = {
    "Orc": ["Light"], // Small type of enemy, same as gnome weak to light since they live in caves.
    "Dragon": ["Pierce"], // Dragonic type enemy, strong against everything but not against piercing attacks, going through their hide.
    "Wyvern": ["Pierce"], // Dragonic type enemy, strong against everything but not against piercing attacks, going through their hide.
    "Gnome": ["Light"], // Small type of enemy, same as Orc weak to light since they live in caves.
    "Skeleton": ["Holy"], // Death is weak against holy.
    "Bandit": ["Any"], // Weak enemy, basically weak to anything.
    "Witch": ["Lightning", "Pierce"], // Enemy that uses magic, only the lightning or piercing attacks work on them.
    "Mage": ["Lightning", "Pierce"], // Enemy that uses magic, only the lightning or piercing attacks work on them.
    "Sorceress": ["Lightning", "Pierce"], // Enemy that uses magic, only the lightning or piercing attacks work on them.
    "Golem": ["Lightning"], // A robot type of enemy, lightning makes them short circuit and crash.
    "Warlord": ["Pierce"], // Tanky type of enemy, strong against everything but not against piercing attacks, going through their armor.
    "Defender": ["Light"], // Big enemy, very tanky but has weak eyes. Blinding them makes them self destruct.
    "Wraith": ["Holy"], // Death is weak against holy.
    "Spirit": ["Holy"], // Death is weak against holy.
    "Troll": ["Magic"], // Although tanky, the trolls have a big weakness to magic and have the past of being brought to slaves by magic users.
    "Thief": ["Any"], // Same as bandit.
    "Siren": ["Holy", "Lightning"], // Being half mermaid and a curse, sirens are weak to holy and lightning.
    "Elemental": ["Strike"], // One of the fewer enemies being weak to strike damage, although often strong a good hit will bring them down.
    "Behemoth": ["Pierce"], // Although being pure evil, the behemoth is quite weak to pierce attacks.
    "King": ["Any"], // Although being strong against everything, also makes him weak to everything.
    "Queen": ["Any"], // Shes a killer, queen!
}

//! Exploration function
function exploreC() {
    // Random Location
    const locationType = randomItem(land);
    const locationStructure = randomItem(biome);
    const location = "<i>" + locationType + " " + locationStructure + "</i>";
    // Random Enemy
    const enemyTitle = randomItem(title);
    const enemyType = randomItem(type);
    const enemyRace = randomItem(race);
    const enemy = "<i>" + enemyTitle + " " + enemyType + " " + enemyRace + "</i>";
    // Enemy weakness
    const enemyWeaknesses = weaknesses[enemyRace] || [];
    const weaknessesText = enemyWeaknesses.length > 0
        ? "Weaknesses: " + enemyWeaknesses.join(", ")
        : "No known weaknesses";
    // Random Loot
    const rarityDrop = randomItem(rarity);
    const itemDrop = randomItem(items);
    const loot = "<em>" + rarityDrop + " " + itemDrop + "</em>";
    // Log message
    logField.innerHTML = timeLog() + " - Explored " + location + "<br/>" + logField.innerHTML;
    // Exploration Text
    infoField.innerHTML =
    "You continue exploring and come across the "
    + location +
    ",<br/> You encounter:<br/>"
    + enemy +
    // "!<br/>"
    // + weaknessesText +
    "!<br/>You fight it and gain "
    + loot +
    ".<hr/>";
}

//! Inventory function
function openInv() {
    logField.innerHTML = timeLog() + " - Opened Inventory<br/>" + logField.innerHTML;
    infoField.innerHTML = "Inventory<hr/>";
}

//! Map function
function openMap() {
    logField.innerHTML = timeLog() + " - Opened Map<br/>" + logField.innerHTML;
    infoField.innerHTML = "Map<hr/>";
}