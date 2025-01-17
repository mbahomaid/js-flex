# Sum of Two Numbers

## Problem Statement
Write a function that takes two numbers as inputs and returns their sum. The goal is to create a simple and reusable function to perform this operation.

### Example:
Given the inputs:
- `num1 = 10`
- `num2 = 5`

The function should return:
- `15`

---

## Solution
To solve this problem, we will create a function named `sumOfTwo`. This function will:
1. Accept two parameters (`num1` and `num2`).
2. Add these two numbers together.
3. Return the result of the addition.

Below is the implementation:

```javascript
function sumOfTwo(num1, num2) {
  return num1 + num2;
}

const sum = sumOfTwo(10, 5);
console.log(sum);
```

### Explanation:
1. **Function Definition**: The function `sumOfTwo` is defined with two parameters: `num1` and `num2`.
2. **Addition**: Inside the function, the two input numbers are added together using the `+` operator.
3. **Return Statement**: The result of the addition is returned from the function.
4. **Usage**: The function is called with the arguments `10` and `5`, and the result (`15`) is logged to the console using `console.log`.

---

### How to Use:
1. Copy the code snippet above into a JavaScript file (e.g., `sumOfTwo.js`).
2. Run the file in a JavaScript environment (e.g., Node.js or a browser console).
3. Observe the output in the console. For the example provided, it will display:
   ```
   15
   ```

---

### Why This Solution Works:
- The function is straightforward and performs the task of summing two numbers efficiently.
- It is reusable and can be called with any two numeric inputs to calculate their sum.

This simple function is a great starting point for understanding how to write and use basic JavaScript functions.

