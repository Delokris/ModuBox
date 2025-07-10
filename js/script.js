let boxSize = [];
let shoppingList = [];
let slideIndex = 1;
showSlides(slideIndex);
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  if (slides[slideIndex-1]) {
    slides[slideIndex-1].style.display = "block";
  }
  if (dots[slideIndex-1]) {
    dots[slideIndex-1].className += " active";
  }
}

// Automatically advance slides every 3 seconds
let slideTimer;

function startSlideTimer() {
    if(document.getElementById("center-container")){
        stopSlideTimer();
        slideTimer = setInterval(function() {
            plusSlides(1);
        }, 7000);
    }
}

function stopSlideTimer() {
    if (slideTimer) {
        clearInterval(slideTimer);
        slideTimer = null;
    }
}
// Restart timer on slide change
function plusSlides(n) {
    showSlides(slideIndex += n);
    startSlideTimer();
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    startSlideTimer();
}
    let images = [];
    images[0] = document.getElementById("slideImg1");
    images[1] = document.getElementById("slideImg2");
    images[2] = document.getElementById("slideImg3");
    images[3] = document.getElementById("slideImg4");

function adjustImgSize() {
    images.forEach(image => {
        if (image) {
            const container = document.getElementById("center-container");
            // Reset styles to natural size before scaling
            image.style.width = "";
            image.style.height = "";
            const imgAspect = image.naturalWidth / image.naturalHeight;
            const containerAspect = container.clientWidth / container.clientHeight;
            if (imgAspect >= containerAspect) {
                image.style.width = container.clientWidth + "px";
                image.style.height = "auto";
            } else {
                image.style.height = container.clientHeight + "px";
                image.style.width = "auto";
            }
        }
    });
}
function addToShoppingList(itemID) {
    shoppingList.push(itemID);
    console.log("Item added to shopping list: " + itemID);
    console.log("Current shopping list: " + shoppingList.join(", "));
    adjustCartSize();
}
function adjustCartSize() {
    let itemCount = document.getElementById("itemCount");
    if (itemCount) {
        // Find the span or element with the number inside the cart image and replace only the number
        let html = itemCount.innerHTML;
        // Replace any number in the innerHTML with the new count
        itemCount.innerHTML = html.replace(/\d+/, shoppingList.length);
    }
}
function adjustSizeImprint(){
    document.getElementById("left-hotbar").style.height = document.getElementById("container-impressum").getAttribute("height");
    document.getElementById("left-container").style.height = document.getElementById("container-impressum").getAttribute("height");
}
function calcFittingInlays(){
    let boxLength = parseInt(document.getElementById("boxLength").value);
    let boxWidth = parseInt(document.getElementById("boxWidth").value);
    // let boxHeight = parseInt(document.getElementById("boxHeight").value);
    let boxArea = (boxLength - 2) * (boxWidth - 2);
    let inlaySmall = parseInt(document.getElementById("productInlaySmall").value);
    let inlayMedium = parseInt(document.getElementById("productInlayMedium").value);
    let inlayBig = parseInt(document.getElementById("productInlayBig").value);
    let inlayArea = (inlaySmall * 16) + (inlayMedium * 32) + (inlayBig * 64);
    // Calculate the number of inlays that fit into the box
    let fittingSmall = Math.floor(((boxArea - inlayArea) / 16)) + inlaySmall;
    let fittingMedium = Math.floor(((boxArea - inlayArea) / 32)) + inlayMedium;
    let fittingBig = Math.floor(((boxArea - inlayArea) / 64)) + inlayBig;
    
    document.getElementById("productInlaySmall").max = fittingSmall; 
    document.getElementById("productInlayMedium").max = fittingMedium; 
    document.getElementById("productInlayBig").max = fittingBig; 
}
function calcPrice() {
    let inlaySmall = parseInt(document.getElementById("productInlaySmall").value);
    let inlayMedium = parseInt(document.getElementById("productInlayMedium").value);
    let inlayBig = parseInt(document.getElementById("productInlayBig").value);
    let boxLength = parseInt(document.getElementById("boxLength").value);
    let boxWidth = parseInt(document.getElementById("boxWidth").value);
    let boxHeight = parseInt(document.getElementById("boxHeight").value);
    let inlaySurface = document.getElementById("productInlaySurface").value;
    let surfacePrice = 1;
    // Calculate the price based on the number of inlays and box dimensions
    if(inlaySurface == wood){
        surfacePrice = 1.3;
    }

    let boxArea = (boxLength * boxWidth * 1) + (boxLength * boxHeight * 2) + (boxHeight* boxWidth * 2);
    let price = ((inlaySmall * 1.5 * surfacePrice) + (inlayMedium * 3 * surfacePrice) + (inlayBig * 6 * surfacePrice) + (boxArea * 0.0001 * 30 * 10));
    document.getElementById("priceDisplay").innerHTML = "Gesamtpreis: " + price.toFixed(2) + " €";
}
function drawPreviewBox(){
    const canvas = document.getElementById("previewImage");
    const ctx = canvas.getContext("2d");
    let boxLength = parseInt(document.getElementById("boxLength").value);
    let boxWidth = parseInt(document.getElementById("boxWidth").value);
    let boxHeight = parseInt(document.getElementById("boxHeight").value);
    let padding = 20;
    let scaleY = (canvas.height - padding) / (parseInt(document.getElementById("boxLength").max) + (parseInt(document.getElementById("boxHeight").max) / 2));
    let scaleX = (canvas.width - padding) / (parseInt(document.getElementById("boxWidth").max) + (parseInt(document.getElementById("boxHeight").max) / 2));
    let scale = Math.min(scaleX, scaleY);
    let rectWidth = boxWidth * scale;
    let rectLength = boxLength * scale;
    let rectHeight = boxHeight * scale * 0.5;
    let startX = (canvas.width - rectWidth - rectHeight) / 2;
    let startY = (canvas.height - rectLength - rectHeight) / 2;
    let Box = new Path2D();
    canvas.height = canvas.clientHeight;
    canvas.width = canvas.clientWidth;
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 5;
    ctx.fillStyle = "#FFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    Box.moveTo(startX + rectWidth, startY);
    Box.lineTo(startX + rectWidth + rectHeight, startY + rectHeight);
    Box.lineTo(startX + rectWidth + rectHeight, startY + rectLength + rectHeight);
    Box.lineTo(startX + rectHeight, startY + rectLength + rectHeight);
    Box.lineTo(startX, startY + rectLength);
    Box.moveTo(startX + rectWidth, startY + rectLength);
    Box.lineTo(startX + rectWidth + rectHeight, startY + rectLength + rectHeight);
    Box.moveTo(startX + rectHeight, startY + rectLength);
    ctx.fillStyle = "#905e3e";
    ctx.fill(Box);
    ctx.stroke(Box);
    //ctx.beginPath();
    Box = new Path2D();
    Box.moveTo(startX, startY);
    Box.lineTo(startX + rectWidth, startY);
    Box.lineTo(startX + rectWidth, startY + rectLength);
    Box.lineTo(startX, startY + rectLength);
    Box.closePath();
    ctx.fillStyle = "#ba8c63";
    ctx.fill(Box);
    ctx.stroke(Box);
    drawPreviewInlays();
}
function drawPreviewInlays() {
    const canvas = document.getElementById("previewImage");
    const ctx = canvas.getContext("2d");
    let boxLength = parseInt(document.getElementById("boxLength").value);
    let boxWidth = parseInt(document.getElementById("boxWidth").value);
    let boxHeight = parseInt(document.getElementById("boxHeight").value);
    let inlaySmall = parseInt(document.getElementById("productInlaySmall").value);
    let inlayMedium = parseInt(document.getElementById("productInlayMedium").value);
    let inlayBig = parseInt(document.getElementById("productInlayBig").value);
    let inlayNumber = inlaySmall + inlayMedium + inlayBig;
    let padding = 20;
    let scaleY = (canvas.height - padding) / (parseInt(document.getElementById("boxLength").max) + (parseInt(document.getElementById("boxHeight").max) / 2));
    let scaleX = (canvas.width - padding) / (parseInt(document.getElementById("boxWidth").max) + (parseInt(document.getElementById("boxHeight").max) / 2));
    let scale = Math.min(scaleX, scaleY);
    let rectWidth = boxWidth * scale;
    let rectLength = boxLength * scale;
    let rectHeight = boxHeight * scale * 0.5;
    let startX = (canvas.width - rectWidth - rectHeight) / 2;
    let startY = (canvas.height - rectLength - rectHeight) / 2;
    let inlayX = 0, inlayY = 0;
    let inlay = new Path2D();
    let currentInlayWidth, currentInlayLength;
    //canvas.height = canvas.clientHeight;
    //canvas.width = canvas.clientWidth;
    for (let i = 0; i < inlayNumber; i++) {
        if (i < inlaySmall) {
            currentInlayWidth = 4 * scale;
            currentInlayLength = 4 * scale;
        }
        else if (i < inlaySmall + inlayMedium) {
            currentInlayWidth = 8 * scale;
            currentInlayLength = 4 * scale;
        } else {
            currentInlayWidth = 8 * scale;
            currentInlayLength = 8 * scale;
        }

        // Rotate inlay if its length is shorter than its width and it would fit better rotated
        /*let rotated = false;
        if (
            currentInlayLength < currentInlayWidth &&
            inlayX + currentInlayLength <= rectWidth &&
            currentInlayWidth <= rectLength - inlayY &&
            inlayX + currentInlayWidth > rectWidth
        ) {
            // Swap width and length for rotation
            [currentInlayWidth, currentInlayLength] = [currentInlayLength, currentInlayWidth];
            rotated = true;
        }
        */
        // Check if inlay fits in current row, else move to next row
        if (inlayX + currentInlayWidth > rectWidth) {
            inlayX = 0;
            inlayY += currentInlayLength;
        }

        startX = ((canvas.width - rectWidth - rectHeight) / 2) + inlayX;
        startY = ((canvas.height - rectLength - rectHeight) / 2) + inlayY;

        inlay = new Path2D();
        inlay.moveTo(startX, startY);
        inlay.lineTo(startX + currentInlayWidth, startY);
        inlay.lineTo(startX + currentInlayWidth, startY + currentInlayLength);
        inlay.lineTo(startX, startY + currentInlayLength);
        inlay.closePath();
        ctx.fillStyle = "#d3b8a0";
        ctx.fill(inlay);
        ctx.stroke(inlay);

        // Move inlayX for the next inlay
        inlayX += currentInlayWidth;
    }
}
// document.getElementById("buttonConfigurator").onclick = function() {}
document.getElementById("buttonBoardgame").onclick = function() {
    document.getElementById("configurator").hidden = false;
    document.getElementById("configuratorOverlay").hidden = false;
    document.getElementById("boxLength").value = 30;
    document.getElementById("boxWidth").value = 30;
    document.getElementById("boxHeight").value = 8;
    document.getElementById("labelBoxLength").innerHTML = "Länge:<br>" + document.getElementById("boxLength").value + " cm";
    document.getElementById("labelBoxWidth").innerHTML = "Breite:<br>" + document.getElementById("boxWidth").value + " cm";
    document.getElementById("labelBoxHeight").innerHTML = "Höhe:<br>" + document.getElementById("boxHeight").value + " cm";
    document.getElementById("configurator").style["z-index"] = "999";
    document.getElementById("configuratorOverlay").style["z-index"] = "1000";
    calcFittingInlays();
    calcPrice();
    drawPreviewBox();
}
document.getElementById("buttonSmall").onclick = function() {
    document.getElementById("configurator").hidden = false;
    document.getElementById("configuratorOverlay").hidden = false;
    document.getElementById("boxLength").value = 22;
    document.getElementById("boxWidth").value = 18;
    document.getElementById("boxHeight").value = 12;
    document.getElementById("labelBoxLength").innerHTML = "Länge:<br>" + document.getElementById("boxLength").value + " cm";
    document.getElementById("labelBoxWidth").innerHTML = "Breite:<br>" + document.getElementById("boxWidth").value + " cm";
    document.getElementById("labelBoxHeight").innerHTML = "Höhe:<br>" + document.getElementById("boxHeight").value + " cm";
    document.getElementById("boxLength").ariaReadOnly = true;
    document.getElementById("boxWidth").ariaReadOnly = true;
    document.getElementById("boxHeight").ariaReadOnly = true;
    document.getElementById("configurator").style["z-index"] = "999";
    document.getElementById("configuratorOverlay").style["z-index"] = "1000";
    calcFittingInlays();
    calcPrice();
    drawPreviewBox();
}
document.getElementById("buttonIndividual").onclick = function() {
//    document.getElementById("configurator").hidden = false;
//    document.getElementById("configuratorOverlay").hidden = false;
    document.getElementById("labelBoxLength").innerHTML = "Länge:<br>" + document.getElementById("boxLength").value + " cm";
    document.getElementById("labelBoxWidth").innerHTML = "Breite:<br>" + document.getElementById("boxWidth").value + " cm";
    document.getElementById("labelBoxHeight").innerHTML = "Höhe:<br>" + document.getElementById("boxHeight").value + " cm";
    document.getElementById("configurator").style["z-index"] = "999";
    document.getElementById("configuratorOverlay").style["z-index"] = "1000";
    calcFittingInlays();
    calcPrice();
    drawPreviewBox();
}
document.getElementById("configuratorCancel").onclick = function() {
    document.getElementById("configurator").style["z-index"] = "0";
    document.getElementById("configuratorOverlay").style["z-index"] = "0";
//    document.getElementById("configurator").hidden = true;
//    document.getElementById("configuratorOverlay").hidden = true;
}
document.getElementById("finishedBox").onclick = function() {
    calcPrice();
    boxSize.push([
        document.getElementById("boxLength").value,
        document.getElementById("boxWidth").value,
        document.getElementById("boxHeight").value
    ]);
    let priceText = document.getElementById("priceDisplay").innerHTML;
    let price = "";
    price = priceText.split(': ')[1].split(' €')[0];
    let item = "";
    if (parseInt(document.getElementById("boxLength").value) === 30 &&
        parseInt(document.getElementById("boxWidth").value) === 30 &&
        parseInt(document.getElementById("boxHeight").value) === 8) {
        item = "Boardgame-30x30x8-" + price;
    } else if (parseInt(document.getElementById("boxLength").value) === 22 &&
        parseInt(document.getElementById("boxWidth").value) === 18 &&
        parseInt(document.getElementById("boxHeight").value) === 12) {
        item = "Small-22x16x12-" + price;
    } else {
        item = "Individual-" + document.getElementById("boxLength").value + "x" + document.getElementById("boxWidth").value + "x" + document.getElementById("boxHeight").value + "-" + price;
    }
    addToShoppingList(item);
    document.getElementById("configurator").style["z-index"] = "0";
    document.getElementById("configuratorOverlay").style["z-index"] = "0";
//    document.getElementById("configurator").hidden = true;
//    document.getElementById("configuratorOverlay").hidden = true;
}
document.getElementById("boxLength").oninput = function() {
    document.getElementById("labelBoxLength").innerHTML = "Länge:<br>" + this.value + " cm";
    calcFittingInlays();
    calcPrice();
    drawPreviewBox();
}
document.getElementById("boxWidth").oninput = function() {
    document.getElementById("labelBoxWidth").innerHTML = "Breite:<br>" + this.value + " cm";
    calcFittingInlays();
    calcPrice();
    drawPreviewBox();
}
document.getElementById("boxHeight").oninput = function() {
    document.getElementById("labelBoxHeight").innerHTML = "Höhe:<br>" + this.value + " cm";
    calcFittingInlays();
    calcPrice();
    drawPreviewBox();
}
document.getElementById("productInlaySmall").oninput = function() {
    calcFittingInlays();
    calcPrice();
    drawPreviewBox();
}
document.getElementById("productInlayMedium").oninput = function() {
    calcFittingInlays();
    calcPrice();
    drawPreviewBox();
}
document.getElementById("productInlayBig").oninput = function() {
    calcFittingInlays();
    calcPrice();
    drawPreviewBox();
}
document.getElementById("productConfig").onresize = function() {
    drawPreviewBox();
}
document.getElementById("cart").onclick = function() {
    let shoppingCart = document.getElementById("shoppingCart");
    shoppingCart.hidden = !shoppingCart.hidden;
    if (!shoppingCart.hidden) {
        let cartItems = document.getElementById("cartItems");
        cartItems.innerHTML = "";
        if (shoppingList.length === 0) {
            cartItems.innerHTML = "<p>Dein Warenkorb ist leer.</p>";
            document.getElementById("checkoutButton").disabled = true;
        } else {
            document.getElementById("checkoutButton").disabled = false;
            shoppingList.forEach(item => {
                let itemElement = document.createElement("p");
                if (item.includes("-")) {
                    let shoppingItem = item.split("-");
                    let strong = document.createElement("strong");
                    strong.textContent = shoppingItem[0];
                    itemElement.appendChild(strong);
                    itemElement.appendChild(document.createTextNode(", Größe: " + shoppingItem[1] + ", Preis: " + shoppingItem[2] + " €"));
                } else {
                    itemElement.textContent = "" + item + "";
                }
                cartItems.appendChild(itemElement);
            });
        }
    }
}


function enableCartItemEditing() {
    const cartItems = document.getElementById("cartItems");
    cartItems.querySelectorAll("strong").forEach(strong => {
        strong.style.cursor = "pointer";
        strong.onclick = function () {
            const parentText = strong.parentNode.textContent;
            // Extract size and price from the text
            const sizeMatch = parentText.match(/Größe: (\d+)x(\d+)x(\d+)/);
            if (sizeMatch) {
                document.getElementById("boxLength").value = sizeMatch[1];
                document.getElementById("boxWidth").value = sizeMatch[2];
                document.getElementById("boxHeight").value = sizeMatch[3];
                document.getElementById("labelBoxLength").innerHTML = "Länge:<br>" + sizeMatch[1] + " cm";
                document.getElementById("labelBoxWidth").innerHTML = "Breite:<br>" + sizeMatch[2] + " cm";
                document.getElementById("labelBoxHeight").innerHTML = "Höhe:<br>" + sizeMatch[3] + " cm";
                document.getElementById("configurator").style["z-index"] = "999";
                document.getElementById("configuratorOverlay").style["z-index"] = "1000";
                document.getElementById("configurator").hidden = false;
                document.getElementById("configuratorOverlay").hidden = false;
                calcFittingInlays();
                calcPrice();
                drawPreviewBox();
                const shoppingCart = document.getElementById("shoppingCart");
                shoppingCart.hidden = true;
            }
        };
    });

}

// Call this function after updating the cart items
document.getElementById("cart").addEventListener("click", function () {
    setTimeout(enableCartItemEditing, 0);
});
async function init() {
    adjustImgSize();
    startSlideTimer();
    let container = document.getElementById("right-container");
    if(container){
        await new Promise(resolve => setTimeout(resolve, 5000));
        container.hidden = false;
    }
}

// Start timer and event listeners after DOM is loaded
//document.addEventListener('DOMContentLoaded', function() {
//    startSlideTimer();

    // Pause on hover, resume on mouse leave
    const slideshow = document.querySelector('.slideshow-container') || document; // fallback if no container
    slideshow.addEventListener('mouseenter', stopSlideTimer);
    slideshow.addEventListener('mouseleave', startSlideTimer);

//    init();
//});