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
      alert("✅" + "Calling " + getName + " at " + getNumber + "...");
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

//Functionality of call history starts
const callHistory = []; // to store all call entries
const callBtn = document.getElementsByClassName("btn-call");
const serviceNames = document.getElementsByClassName("service-name");
const serviceNum = document.getElementsByClassName("service-number");
const callHistoryContainer = document.getElementById("call-history-data");
const clearBtn = document.getElementById("btn-clear");
// Add call history entry when a call button is clicked
for (let i = 0; i < callBtn.length; i++) {
  callBtn[i].addEventListener("click", function () {
    const name = serviceNames[i].innerText;
    const number = serviceNum[i].innerText;

    // create call entry
    const callEntry = {
      name: name,
      number: number,
      time: new Date().toLocaleTimeString(), // directly get current time
    };

    // push into history array
    callHistory.push(callEntry);

    // add to HTML
    const div = document.createElement("div");
    div.className =
      "flex justify-between items-center bg-[#fafafa] p-3 rounded-lg my-2";
    div.innerHTML = `
      <div>
        <p class="font-semibold p-2">${callEntry.name}</p>
        <p class="text-[#5c5c5c] pl-2">${callEntry.number}</p>
      </div>
      <p>${callEntry.time}</p>
    `;
    callHistoryContainer.appendChild(div);
  });
}
// Functionality of call history ends

// Clear history Functionality
clearBtn.addEventListener("click", function () {
  callHistoryContainer.innerHTML = "";
});
