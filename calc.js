const btns = document.querySelectorAll(".btn");
const display = document.querySelector(".display input");
const equal_btn = document.querySelector(".equal");
const reset_display = document.querySelector(".reset");
const del=document.querySelector(".delete")

function results(e) {
  display.value += e.target.value;
}

btns.forEach((btn) => {
  btn.addEventListener("click", results);
});

calculate = function calc() {
  const expression = display.value;
  const result = eval(expression);

  display.value = result;
};

equal_btn.addEventListener("click", calculate);

function reset() {
  display.value = "";
}

reset_display.addEventListener("click", reset);

function delete1() {
    display.value = display.value.slice(0, -1);
  }
  
  del.addEventListener('click', delete1);
  
