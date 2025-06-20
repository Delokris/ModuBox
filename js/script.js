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