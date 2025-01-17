# Student Grade Evaluation

## Problem Statement
The goal of this challenge is to create a set of functions to evaluate student performance based on their scores. These functions will calculate the class average, assign letter grades, determine passing status, and generate personalized messages for students about their performance.

### Example:
Given the inputs:
- Total class scores: `[92, 88, 12, 77, 57, 100, 67, 38, 97, 89]`
- Student score: `60`

The program should output:
```
Class average: 71.7. Your grade: D. You passed the course.
```

---

## Solution
To solve this challenge, the following functions are implemented:

### 1. `getAverage(scores)`
Calculates the average of an array of scores.

#### Implementation:
```javascript
function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}
```

### 2. `getGrade(score)`
Determines the letter grade based on the numeric score.

#### Implementation:
```javascript
function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}
```

### 3. `hasPassingGrade(score)`
Checks if a score is passing (not an "F").

#### Implementation:
```javascript
function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}
```

### 4. `studentMsg(totalScores, studentScore)`
Generates a personalized message for the student based on their performance and the class average.

#### Implementation:
```javascript
function studentMsg(totalScores, studentScore) {
  if (hasPassingGrade(studentScore)) {
    return (
      "Class average: " +
      getAverage(totalScores) +
      ". Your grade: " +
      getGrade(studentScore) +
      ". You passed the course."
    );
  } else {
    return (
      "Class average: " +
      getAverage(totalScores) +
      ". Your grade: " +
      getGrade(studentScore) +
      ". You failed the course."
    );
  }
}
```

---

### How to Use:
1. Copy the code above into a JavaScript file (e.g., `GradebookApp.js`).
2. Call the `studentMsg` function with an array of class scores and a student’s score.
3. Run the file in a JavaScript environment (e.g., Node.js or browser console).

#### Example Usage:
```javascript
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 60));
```

#### Output:
```
Class average: 71.7. Your grade: D. You passed the course.
```

---

### Why This Solution Works:
- **Modularity**: Each function performs a single, well-defined task, making the code reusable and easy to understand.
- **Flexibility**: The solution handles a variety of scores and adapts the output accordingly.
- **Readability**: The code is structured and readable, ensuring maintainability and ease of debugging.

