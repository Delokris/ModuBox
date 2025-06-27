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
    document.getElementById("boxWidth").value = 30;
    document.getElementById("boxHeight").value = 8;
    document.getElementById("labelBoxLength").innerHTML = "Länge:<br>" + document.getElementById("boxLength").value + " cm";
    document.getElementById("labelBoxWidth").innerHTML = "Breite:<br>" + document.getElementById("boxWidth").value + " cm";
    document.getElementById("labelBoxHeight").innerHTML = "Höhe:<br>" + document.getElementById("boxHeight").value + " cm";
    document.getElementById("boxLength").ariaReadOnly = true;
    document.getElementById("boxWidth").ariaReadOnly = true;
    document.getElementById("boxHeight").ariaReadOnly = true;
    document.getElementById("configurator").style["z-index"] = "999";
    document.getElementById("configuratorOverlay").style["z-index"] = "1000";
}
document.getElementById("buttonSmall").onclick = function() {
    document.getElementById("boxLength").value = 20;
    document.getElementById("boxWidth").value = 15;
    document.getElementById("boxHeight").value = 10;
    document.getElementById("labelBoxLength").innerHTML = "Länge:<br>" + document.getElementById("boxLength").value + " cm";
    document.getElementById("labelBoxWidth").innerHTML = "Breite:<br>" + document.getElementById("boxWidth").value + " cm";
    document.getElementById("labelBoxHeight").innerHTML = "Höhe:<br>" + document.getElementById("boxHeight").value + " cm";
    document.getElementById("boxLength").ariaReadOnly = true;
    document.getElementById("boxWidth").ariaReadOnly = true;
    document.getElementById("boxHeight").ariaReadOnly = true;
    document.getElementById("configurator").style["z-index"] = "999";
    document.getElementById("configuratorOverlay").style["z-index"] = "1000";
}
document.getElementById("buttonIndividual").onclick = function() {
    document.getElementById("labelBoxLength").innerHTML = "Länge:<br>" + document.getElementById("boxLength").value + " cm";
    document.getElementById("labelBoxWidth").innerHTML = "Breite:<br>" + document.getElementById("boxWidth").value + " cm";
    document.getElementById("labelBoxHeight").innerHTML = "Höhe:<br>" + document.getElementById("boxHeight").value + " cm";
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
document.getElementById("boxWidth").oninput = function() {
    document.getElementById("labelBoxWidth").innerHTML = "Breite:<br>" + this.value + " cm";
}
document.getElementById("boxHeight").oninput = function() {
    document.getElementById("labelBoxHeight").innerHTML = "Höhe:<br>" + this.value + " cm";
}