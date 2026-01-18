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
const type = ["Mythical", "Forest", "Shadow", "Elemental", "Cursed", "Dragonkin", "Fey", "Undead", "Celestial", "Demonic", "Ancient", "Ice", "Vengeful", "Forest", "Cave", "Mountain", "Ocean", "Storm", "Desert", "Nightmare"];
const race = ["Orc", "Dragon", "Wyvern", "Gnome", "Skeleton", "Bandit", "Witch", "Mage", "Sorceress", "Golem", "Warlord", "Defender", "Wraith", "Spirit", "Troll", "Thief", "Siren", "Elemental", "Behemoth", "Femboy", "Tomboy", "King", "Queen"];
// Loot drops (randomizer system too)
const rarity = ["Common", "Uncommon", "Rare", "Epic", "Legendary", "Mythical"];
const effect = ["Divine", "Dark", "Broken", "Banished"];
const items = ["Pizza", "Bread", "Arrows", "Health Potion", "Stamina Potion", "Mysterious Potion", "Sword", "Spear", "Axe", "Bow", "Dagger", "Katana", "Greatsword"];

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
    ",<br/> You encounter the "
    + enemy +
    "! You fight it and gain "
    + loot +
    "<hr/>";
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