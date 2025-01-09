const count = 8;
const char = "#";
let rows = [];
let result = "";

for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}

for (const row of rows) {
  result += row + "\n";
}
console.log(result);

function padRow(rowNumber, rowCount) {
  return (
    " ".repeat(rowCount - rowNumber) +
    char.repeat(2 * rowNumber - 1) +
    " ".repeat(rowCount - rowNumber)
  );
}
