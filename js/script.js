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
//getting all call btns with by using classname
const callButtons = document.getElementsByClassName("btn-call");
for (let i = 0; i < callButtons.length; i++) {
  let serviceNumber = document.getElementsByClassName("service-number");
  callButtons[i].addEventListener("click", function () {
    const getName = serviceName[i].innerText;
    const getNumber = serviceNumber[i].innerText;
    if (coinCount >= 20) {
      coinCount -= 20;
      document.getElementById("count-coin").innerText = coinCount;
      alert("Calling " + getName + " at " + getNumber + "...");
    } else alert("You do not have enough coins");
  });
}
// Call and Coins section functionality ends

// copy button, copy every service number and copy count functionality starts
let copyCount = parseInt(document.getElementById("copy-count").innerText);
let copyButton = document.getElementsByClassName("btn-copy");
let serviceNumbers = document.getElementsByClassName("service-number");
let index = 0;
for (let btn of copyButton) {
  let currentIndex = index;
  btn.addEventListener("click", function () {
    copyCount = copyCount + 1;
    document.getElementById("copy-count").innerText = copyCount;
    // copy service number at the same index
    let numberToCopy = serviceNumbers[currentIndex].innerText;
    navigator.clipboard.writeText(numberToCopy);
    //showing alert
    alert(`Number ${numberToCopy} has been copied successfully ✅`);
  });
  index++;
}
// copy button and copy count functionality ends
