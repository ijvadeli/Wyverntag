const logField = document.getElementById("Log");
const infoField = document.getElementById("infoField");

function timeLog() {
    setTimeout(5000)
    let t = new Date();
    let h = t.getHours();
    let m = t.getMinutes();
    let s = t.getSeconds();

    const timeString = h + ":" + m + ":" + s;
    return timeString;
}
setInterval(timeLog(), 1000)

function exploreC() {
    logField.innerHTML += timeLog() + " - Explored";
}

function openInv() {
    logField.innerHTML += timeLog() + " - Inventory";
}

function openMap() {
    logField.innerHTML += timeLog() + " - Map";
}