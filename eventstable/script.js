grid.tHead.addEventListener("click", function (event) {
  let type = event.target.dataset.type;
  let targetIdx = event.target.cellIndex;

  let collator = Intl.Collator("en-US", { numeric: type === "number" });

  let func = (a, b) =>
    collator.compare(
      a.cells[targetIdx].innerHTML,
      b.cells[targetIdx].innerHTML
    );

  for (let body of grid.tBodies) {
    let sorted = [...body.rows].sort(func);
    body.append(...sorted);
  }
});
