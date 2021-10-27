const heading = document.getElementById("title");
const heading2 = document.getElementById("subtitle");

setTimeout(() => {
  addStylesTo(heading, "СЕКРЕТ ПРОСТ:");
}, 2000);

setTimeout(() => {
  addStylesTo(heading2, "БОЛЬШЕ ПРАКТИКУЙСЯ!!", "blue");
}, 4000);

function addStylesTo(node, text, color = "red") {
  node.textContent = text;
  node.style.color = color;
  node.style.textAlign = "center";
  node.style.backgroundColor = "pink";
  node.style.padding = "2rem";
}

heading.addEventListener("dblclick", () => {
  heading.style.color = "yellow";
  heading.style.backgroundColor = "green";
});
