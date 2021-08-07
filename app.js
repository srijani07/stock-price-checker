var purchasePrice = document.querySelector("#purchase-price");
var stockPurchased = document.querySelector("#stock-purchased");
var stockSold =  document.querySelector("#stock-sold");
var currentPrice = document.querySelector("#current-price");
var btnCheck = document.querySelector("#check-btn");
var outputArea = document.querySelector("#output-area");
var imgHappy = document.querySelector("#happy-gif");
var imgSad = document.querySelector("#sad-gif");


outputArea.style.display = "none";
imgHappy.style.display = "none";
imgSad.style.display = "none";




function clickHandler() {
    // checks if input is not empty and is a valid number
    outputArea.style.display = "block";
    if(isNaN(parseInt(purchasePrice.value)) === true || isNaN(parseInt(stockPurchased.value)) === true || isNaN(parseInt(stockSold.value)) === true || isNaN(parseInt(currentPrice.value)) === true || parseInt(purchasePrice.value) <= 0 || parseInt(stockPurchased.value) <= 0 || parseInt(stockSold.value)<=0 || parseInt(currentPrice.value) <=0 ) 
    outputArea.innerHTML = "Please enter valid input.";
    else if(parseInt(stockPurchased.value) < parseInt(stockSold.value)) {
        outputArea.innerHTML = "Error. Please enter correct amount of stocks sold/purchased."
    }
    else {
        var totalCostPrice = parseInt(purchasePrice.value)*parseInt(stockSold.value);
        var totalSellingPrice = parseInt(currentPrice.value)*parseInt(stockSold.value);
        if(parseInt(purchasePrice.value) < parseInt(currentPrice.value)) {
            document.body.style.backgroundColor = "#ffea6c";
            document.body.style.color = "black";
            var profit = totalSellingPrice-totalCostPrice;
            var profitPercent = (profit*100)/totalCostPrice;
            outputArea.innerHTML = "You made a profit of : "+profitPercent.toFixed(2)+"%, which is Rs. "+profit;
            imgHappy.style.display = "block"
            imgSad.style.display = "none"
        }

        else if(parseInt(purchasePrice.value) > parseInt(currentPrice.value)) {
            document.body.style.backgroundColor = "#E5E7EB";
            var loss = totalCostPrice-totalSellingPrice;
            var lossPercent = (loss*100)/totalCostPrice;
            outputArea.innerHTML = "You made a loss of : "+lossPercent.toFixed(2)+"%, which is Rs. "+loss;
            imgHappy.style.display = "none"
            imgSad.style.display = "block"
        }

        else {
            outputArea.innerHTML = "You neither gained nor lost."
        }
    }
     
}

btnCheck.addEventListener("click",clickHandler);
