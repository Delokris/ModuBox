function buttonCount(){
    count = count+1
    console.log("Button clicked " + count + " times");
}
let count = 0;
buttonCount();
let shoppingList = [];
function addToShoppingList(itemID) {
    shoppingList.push(item);
    console.log("Item added to shopping list: " + item);
    console.log("Current shopping list: " + shoppingList.join(", "));
}
function adjustHeight() {
    document.getElementById('left-hotbar').style.height = document.defaultView.getComputedStyle(document.getElementById('header'), "").getPropertyValue("height");
    document.getElementById('left-container').style.height = document.defaultView.getComputedStyle(document.getElementById('header'), "").getPropertyValue("height");
    document.getElementById('right-container').style.height = document.defaultView.getComputedStyle(document.getElementById('header'), "").getPropertyValue("height");
}


adjustHeight();