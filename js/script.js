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
function adjustSizeMain() {
    document.getElementById('left-hotbar').style.top = document.defaultView.getComputedStyle(document.getElementById('header'), "").getPropertyValue("height");
    document.getElementById('left-container').style.top = document.defaultView.getComputedStyle(document.getElementById('header'), "").getPropertyValue("height");
    document.getElementById('home_big').style.width = document.defaultView.getComputedStyle(document.getElementById('home_small'), "").getPropertyValue("width");
    document.getElementById('shop_big').style.width = document.defaultView.getComputedStyle(document.getElementById('shop_small'), "").getPropertyValue("width");
    document.getElementById('about_big').style.width = document.defaultView.getComputedStyle(document.getElementById('about_small'), "").getPropertyValue("width");
}

function adjustSizeHome() {
    adjustSizeMain();
    document.getElementById('right-container').style.top = document.defaultView.getComputedStyle(document.getElementById('header'), "").getPropertyValue("height");
    document.getElementById('center-container').style.top = document.defaultView.getComputedStyle(document.getElementById('header'), "").getPropertyValue("height");
}

function adjustSizeImprint(){
    adjustSizeMain();
    document.getElementById('container-impressum').style.top = document.defaultView.getComputedStyle(document.getElementById('header'), "").getPropertyValue("height");
    
}

function adjustSizeContact() {
    adjustSizeMain();
    document.getElementById('container-contact').style.top = document.defaultView.getComputedStyle(document.getElementById('header'), "").getPropertyValue("height");
}
function adjustSizePrivacy() {
    adjustSizeMain();
    document.getElementById('container-privacy').style.top = document.defaultView.getComputedStyle(document.getElementById('header'), "").getPropertyValue("height");
    document.getElementById('left-hotbar').style.height = document.defaultView.getComputedStyle(document.getElementById('container-privacy'), "").getPropertyValue("height");
    document.getElementById('left-container').style.height = document.defaultView.getComputedStyle(document.getElementById('container-privacy'), "").getPropertyValue("height");
}    
    

function adjustSizeAbout() {
    adjustSizeMain();
    document.getElementById('container-about').style.top = document.defaultView.getComputedStyle(document.getElementById('header'), "").getPropertyValue("height");
}

function adjustSizeShop() {
    adjustSizeMain();
    document.getElementById('container-shop').style.top = document.defaultView.getComputedStyle(document.getElementById('header'), "").getPropertyValue("height");
} 