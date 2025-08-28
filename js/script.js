// Heart section functionality starts
//Navbar heart counter
const heartCounts = document.getElementById("count-heart");
//getting all heart-btns with by using classname
const heartButtons = document.getElementsByClassName("btn-heart");
for (let btn of heartButtons) {
  btn.addEventListener("click", function () {
    let count = parseInt(heartCounts.innerText);
    heartCounts.innerText = count + 1;
  });
}
// Heart section functionality ends

// Call and Coins section functionality starts
let coinCount = document.getElementById("count-coin");
let coins = parseInt(coinCount.innerText);
let serviceName = document.getElementsByClassName("service-name");
let serviceNumber = document.getElementsByClassName("service-number");
//getting all call btns with by using classname
const callButtons = document.getElementsByClassName("btn-call");
for (let coins of callButtons) {
  callButtons.addEventListener("click", function () {
    if (coins >= 20) {
      coins -= 20;
      coinCount.innerText = coins;
      alert("Calling" + serviceName + "at" + serviceNumber);
    } else {
      alert("You do not have enough coins to make a call");
    }
  });
}

// Call and Coins section functionality ends
