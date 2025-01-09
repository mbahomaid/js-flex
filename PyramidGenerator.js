const count = 8;
const char = "#";
let rows = [];
let result = "";

for (let i = 0; i < count; i++) {
  rows.push(char.repeat(i + 1));
}

for (const row of rows) {
  result += row + "\n";
}
console.log(result);

function padRow() {}
