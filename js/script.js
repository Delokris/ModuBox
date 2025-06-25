let boxSize = [,];
let count = 0;
function buttonCount(){
    count = count+1
    console.log("Button clicked " + count + " times");
}
buttonCount();
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
    boxSize[shoppingList.length,0] = 300;
    boxSize[shoppingList.length,1] = 300;
    boxSize[shoppingList.length,2] = 80; 
    addToShoppingList("Boardgame");
}
document.getElementById("buttonSmall").onclick = function() {
    boxSize[shoppingList.length,0] = 300;
    boxSize[shoppingList.length,1] = 300;
    boxSize[shoppingList.length,2] = 80; 
    addToShoppingList("Small");
}
document.getElementById("buttonIndividual").onclick = function() {
    boxSize[shoppingList.length,0] = 300;
    boxSize[shoppingList.length,1] = 300;
    boxSize[shoppingList.length,2] = 80; 
    addToShoppingList("Individual");
}
