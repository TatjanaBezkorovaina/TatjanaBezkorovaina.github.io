var list = document.querySelector("ul");
var products;
function toLocal() {
  products = list.innerHTML;
  localStorage.setItem("products", products);
}

list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
      toLocal();
    } else if (ev.target.tagName === "SPAN") {
      var div = ev.target.parentNode;
      div.remove();
      toLocal();
    }
  },
  false
);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("toDoEl").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue == "") {
    alert("Додайте товар!");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("toDoEl").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Delete");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  toLocal();
}

if (localStorage.getItem("products")) {
  list.innerHTML = localStorage.getItem("products");
}
