let list = document.getElementById("list");
let block_1 = document.getElementById("block-1");
let block_2 = document.getElementById("block-2");
let block_3 = document.getElementById("block-3");
let block_4 = document.getElementById("block-4");
let block_5 = document.getElementById("block-5");
let block_6 = document.getElementById("block-6");
let block_7 = document.getElementById("block-7");
let block_8 = document.getElementById("block-8");
let block_9 = document.getElementById("block-9");
let restartBtn = document.getElementById("restart");
let chooseBtn = document.getElementById("choose");
let switchWrapper = document.getElementById("switch-wrapper");
let turn = document.getElementById("turn");

let check = false;

turn.innerText = !check ? "x" : 0;
turn.style.color = "blue";

list.addEventListener("click", (e) => {
  turn.innerText = check ? "x" : 0;
  turn.style.color = check ? "blue" : "orange";

  if (e.target.innerText !== "x" || e.target.innerText !== "0") {
    switchWrapper.style.display = "none";
    check = !check;
    e.target.textContent = check ? "x" : "0";
    if (e.target.innerText === "x") {
      e.target.style.color = "blue";
    } else {
      e.target.style.color = "orange";
    }
  } else {
    return;
  }

  checkValue(block_1, block_2, block_3, "x");
  checkValue(block_4, block_5, block_6, "x");
  checkValue(block_7, block_8, block_9, "x");
  checkValue(block_1, block_4, block_7, "x");
  checkValue(block_2, block_5, block_8, "x");
  checkValue(block_3, block_6, block_9, "x");
  checkValue(block_1, block_5, block_9, "x");
  checkValue(block_3, block_5, block_7, "x");
  //////////////////////////////////////////
  checkValue(block_1, block_2, block_3, "0");
  checkValue(block_4, block_5, block_6, "0");
  checkValue(block_7, block_8, block_9, "0");
  checkValue(block_1, block_4, block_7, "0");
  checkValue(block_2, block_5, block_8, "0");
  checkValue(block_3, block_6, block_9, "0");
  checkValue(block_1, block_5, block_9, "0");
  checkValue(block_3, block_5, block_7, "0");
  let arr = Array.from(list.children);
  let i = 0;
  arr.forEach((elem) => (elem.innerText !== "" ? (i += 1) : null));
  if (i == 9) {
    setTimeout(() => {
      let arr = Array.from(list.children);
      arr.forEach((elem) => (elem.innerText = ""));
      check = false;
      turn.innerText = "x";
      turn.style.color = "blue";
    }, 1000);
  }
  console.log(i);
});

chooseBtn.addEventListener("click", (e) => {
  turn.innerText = check ? "x" : 0;
  turn.style.color = check ? "blue" : "orange";

  if (e.target.checked) {
    check = true;
  } else {
    check = false;
  }
});

restartBtn.addEventListener("click", () => {
  switchWrapper.style.display = "block";
  let arr = Array.from(list.children);
  arr.forEach((elem) => (elem.innerText = ""));
  check = false;
});

const checkValue = (block1, block2, block3, text) => {
  if (
    block1.innerText === text &&
    block2.innerText === text &&
    block3.innerText === text
  ) {
    block1.style.background = "Aquamarine";
    block2.style.background = "Aquamarine";
    block3.style.background = "Aquamarine";
    setTimeout(() => {
      block1.style.background = "white";
      block2.style.background = "white";
      block3.style.background = "white";
      let arr = Array.from(list.children);
      arr.forEach((elem) => (elem.innerText = ""));
      check = false;
    }, 1000);

    console.log(`winner is ${text}`);
  }
};
