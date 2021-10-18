const input = document.querySelector(".numberInput");
const para = document.querySelector("p");
function squared(num) {
  return num * num;
}

function cubed(num) {
  return num * num * num;
}

function factorial(num) {
  var x = num;
  while (x > 1) {
    num *= x - 1;
    x--;
  }
  return num;
}
input.onchange = function () {
  var num = input.value;

  if (isNaN(num) || num <= 0) {
    alert("Потрібно вводити невід'ємне числове значення більше нуля");
  } else {
    para.textContent =
      " Квадрат числа = " +
      squared(num) +
      ". " +
      " Куб числа = " +
      cubed(num) +
      ". " +
      " Факторіал числа = " +
      factorial(num) +
      ".";
  }
};
