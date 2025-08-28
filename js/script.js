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
let coinCount = parseInt(document.getElementById("count-coin").innerText);
let serviceName = document.getElementsByClassName("service-name");
let serviceNumber = document.getElementsByClassName("service-number");
//getting all call btns with by using classname
const callButtons = document.getElementsByClassName("btn-call");
for (let i = 0; i < callButtons.length; i++) {
  callButtons[i].addEventListener("click", function () {
    const getName = serviceName[i].innerText;
    const getNumber = serviceNumber[i].innerText;
    if (coinCount >= 20) {
      coinCount -= 20;
      document.getElementById("count-coin").innerText = coinCount;
      alert("Calling " + getName + " at " + getNumber);
    } else alert("You do not have enough coin");
  });
}

// Call and Coins section functionality ends
