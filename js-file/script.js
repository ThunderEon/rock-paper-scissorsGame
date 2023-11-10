let items = document.querySelectorAll(".fa-solid");
let cpuItems = [...items];
let bottomContent = document.querySelector(".choice");
let title = document.querySelector(".title h1")
let cpuPoint = 0;
let userPoint = 0;
let cpuPoint_span = document.querySelector(".cpu-point");
let userPoint_span = document.querySelector(".user-point");
let refreshBtn = document.querySelector("button");

window.addEventListener("load", activeItem);
function addCpu() {
  cpuPoint++;
  cpuPoint_span.innerHTML = cpuPoint;
  cpuPoint_span.parentElement.style.color = "green";
  userPoint_span.parentElement.style.color = "red";
  winner();
}
function addUser() {
  userPoint++;
  userPoint_span.innerHTML = userPoint;
  cpuPoint_span.parentElement.style.color = "red";
  userPoint_span.parentElement.style.color = "green";
  winner();
}

function activeItem() {
  items.forEach((item, index) => {
    item.addEventListener("click", oneTime);
    function oneTime() {
      let randNum = Math.floor(Math.random() * items.length);
      bottomContent.innerHTML = cpuItems[randNum].outerHTML;
      items.forEach((otherItem, otherIndex) => {
        if (index !== otherIndex) {
          title.innerHTML = item.previousElementSibling.textContent;
        }
      });
      gameScore(index, randNum);
    }
  });
}

function gameScore(U, C) {
  let user = "user" + U;
  let cpu = "cpu" + C;
  switch (user + cpu) {
    case "user0cpu1":
    case "user1cpu2":
    case "user2cpu0":
      addCpu();
      break;
    case "user1cpu0":
    case "user2cpu1":
    case "user0cpu2":
      addUser();
      break;
  }
}

refreshBtn.addEventListener("click", ref);
function ref() {
  cpuPoint = 0;
  userPoint = 0;
  cpuPoint_span.innerHTML = cpuPoint;
  userPoint_span.innerHTML = userPoint;
  cpuPoint_span.parentElement.style.color = "";
  userPoint_span.parentElement.style.color = "";
  title.innerHTML = "گزینه مورد نظرت رو انتخاب کن";
}

function winner() {
  if (cpuPoint === 10) {
    alert("رایانه برنده شد");
    ref();
  }
  if (userPoint === 10) {
    alert("شما برنده شدید");
    ref();
  }
}
