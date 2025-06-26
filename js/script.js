let boxSize = [];
let shoppingList = [];
function addToShoppingList(itemID) {
    shoppingList.push(itemID);
    console.log("Item added to shopping list: " + itemID);
    console.log("Current shopping list: " + shoppingList.join(", "));
}
function adjustSizeImprint(){
    document.getElementById("left-hotbar").style.height = document.getElementById("container-impressum").getAttribute("height");
    document.getElementById("left-container").style.height = document.getElementById("container-impressum").getAttribute("height");
}

document.getElementById("buttonBoardgame").onclick = function() {
    document.getElementById("boxLength").value = 30;
    document.getElementById("labelBoxLength").innerHTML = "Länge:<br>" + document.getElementById("boxLength").value + " cm";
    document.getElementById("configurator").style["z-index"] = "999";
    document.getElementById("configuratorOverlay").style["z-index"] = "1000";
}
document.getElementById("buttonSmall").onclick = function() {
    document.getElementById("boxLength").value = 15;
    document.getElementById("labelBoxLength").innerHTML = "Länge:<br>" + document.getElementById("boxLength").value + " cm";
    document.getElementById("configurator").style["z-index"] = "999";
    document.getElementById("configuratorOverlay").style["z-index"] = "1000";
}
document.getElementById("buttonIndividual").onclick = function() {
    document.getElementById("labelBoxLength").innerHTML = "Länge:<br>" + document.getElementById("boxLength").value + " cm";
    document.getElementById("configurator").style["z-index"] = "999";
    document.getElementById("configuratorOverlay").style["z-index"] = "1000";
}
document.getElementById("configuratorCancel").onclick = function() {
    document.getElementById("configurator").style["z-index"] = "0";
    document.getElementById("configuratorOverlay").style["z-index"] = "0";
}
document.getElementById("finishedBox").onclick = function() {
    boxSize.push([
        document.getElementById("boxLength").value,
        document.getElementById("boxWidth").value,
        document.getElementById("boxHeight").value
    ]);
    addToShoppingList("Individual");
    document.getElementById("configurator").style["z-index"] = "0";
    document.getElementById("configuratorOverlay").style["z-index"] = "0";
}
document.getElementById("boxLength").oninput = function() {
    document.getElementById("labelBoxLength").innerHTML = "Länge:<br>" + this.value + " cm";
}