// About user age 

const userAge = prompt('Ваш вік');


if (userAge <= 0) {
  alert('You are not born yet');
} else if (userAge <= 2) {
  alert('You are baby');
} else if (userAge > 2 && userAge <= 12) {
  alert('You are big baby');
} else if (userAge > 12 && userAge <= 18) {
  alert('You are teen');
} else if (userAge > 18 && userAge <= 60) {
  alert('You are adult');
} else if (userAge.replace(/\d/g, '').length) {
  alert('you entered not only numbers');
}

// Money Converter

function converterDollar() {
  const grivna = document.getElementById("funcGrivna").value;
  dollar = 26.35;
  result = grivna * dollar;
  document.getElementById("out").innerHTML = result.toFixed(2);

}
function converterDollarToEuro() {
  const euro = document.getElementById("funcEuro").value;
  dollar = 0.87;
  result = euro * dollar;
  document.getElementById("out1").innerHTML = result.toFixed(2);

}