# Pyramid Generator

## Problem Statement
The goal of this challenge is to generate a symmetrical pyramid pattern using a specified character and a given number of levels. Each level of the pyramid should be centered and increase in width as you move downward.

### Example:
Given the inputs:
- `count = 8` (number of levels in the pyramid)
- `char = "#"` (character used to build the pyramid)

The program should output:
```
       #       
      ###      
     #####     
    #######    
   #########   
  ###########  
 ############# 
###############
```

---

## Solution
To solve this challenge, the following steps are performed:

1. Generate each row of the pyramid with the required number of spaces and characters.
2. Combine all rows into a single string with line breaks to represent the pyramid.
3. Print the result to the console.

### Implementation:
```javascript
const count = 8;  // Number of levels in the pyramid
const char = "#";  // Character to build the pyramid
let rows = [];
let result = "";

// Generate each row of the pyramid
for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}

// Combine rows into the final result
for (const row of rows) {
  result += row + "\n";
}

console.log(result);

// Function to create a padded row
function padRow(rowNumber, rowCount) {
  return (
    " ".repeat(rowCount - rowNumber) +
    char.repeat(2 * rowNumber - 1) +
    " ".repeat(rowCount - rowNumber)
  );
}
```

---

### Explanation:
1. **Variables**:
   - `count`: Specifies the total number of levels in the pyramid.
   - `char`: Specifies the character used to build the pyramid.
2. **Row Generation**:
   - The `padRow` function creates a row of the pyramid with the appropriate number of spaces and characters.
   - Spaces on the left and right ensure the pyramid is centered.
3. **Pyramid Assembly**:
   - Each row is generated and stored in the `rows` array.
   - Rows are then concatenated into a single string, `result`, with line breaks.
4. **Output**:
   - The final pyramid is printed to the console.

---

### How to Use:
1. Copy the code above into a JavaScript file (`PyramidGenerator.js`).
2. Adjust the `count` and `char` variables to customize the pyramid.
3. Run the file in a JavaScript environment (e.g., Node.js or browser console).

#### Example Usage:
```javascript
const count = 5;
const char = "*";
```
#### Output:
```
    *    
   ***   
  *****  
 ******* 
*********
```

---

### Why This Solution Works:
- **Dynamic Row Generation**: The `padRow` function calculates spaces and characters for any level, ensuring the pyramid is always centered.
- **Customizable**: The `count` and `char` variables allow easy customization of the pyramid size and appearance.
- **Readability**: The code is structured and easy to follow, making it accessible for beginners.

