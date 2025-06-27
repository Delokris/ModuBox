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
function calcFittingInlays(){
    let boxLength = parseInt(document.getElementById("boxLength").value);
    let boxWidth = parseInt(document.getElementById("boxWidth").value);
    let boxHeight = parseInt(document.getElementById("boxHeight").value);
    let boxArea = boxLength * boxWidth;
    let inlaySmall = parseInt(document.getElementById("productInlaySmall").value);
    let inlayMedium = parseInt(document.getElementById("productInlayMedium").value);
    let inlayBig = parseInt(document.getElementById("productInlayBig").value);
    let inlayArea = (inlaySmall * 16) + (inlayMedium * 32) + (inlayBig * 64);
    // Calculate the number of inlays that fit into the box
    let fittingSmall = math.Floor(((boxArea - inlayArea) / 16)) + inlaySmall;
    let fittingMedium = math.Floor(((boxArea - inlayArea) / 32)) + inlayMedium;
    let fittingBig = math.Floor(((boxArea - inlayArea) / 64)) + inlayBig;
    
    document.getElementById("productInlaySmall").max = fittingSmall; 
    document.getElementById("productInlayMedium").max = fittingMedium; 
    document.getElementById("productInlayBig").max = fittingBig; 
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
    calcFittingInlays();
}
document.getElementById("boxWidth").oninput = function() {
    document.getElementById("labelBoxWidth").innerHTML = "Breite:<br>" + this.value + " cm";
    calcFittingInlays();
}
document.getElementById("boxHeight").oninput = function() {
    document.getElementById("labelBoxHeight").innerHTML = "Höhe:<br>" + this.value + " cm";
    calcFittingInlays();
}
document.getElementById("productInlaySmall").oninput = function() {
    calcFittingInlays();
}
document.getElementById("productInlayMedium").oninput = function() {
    calcFittingInlays();
}
document.getElementById("productInlayBig").oninput = function() {
    calcFittingInlays();
}