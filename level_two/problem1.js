// Level Two - Problem Set 1: Theme Park Season Pass Access
// Logic Rules:
// - If passType is "Platinum" AND age is 16 → return "can access"
// - If age is 16 AND passType is NOT "Platinum" → return "can sign in"
// - Else → return "go home"

// ============================================
// EASY PROBLEM 1: Simple if statement
// ============================================
// Task: Check if passType is "Platinum" and age is 16
// Hint: Use if statement with && operator
function easyProblem1(passType, age) {
    // TODO: Write your code here
    // If passType is "Platinum" AND age is 16, return "can access"
    // Otherwise, return "go home"
    if (passType === "Platinum" && age === 16) {
        return "can access";
    }
    return "go home";
}

// Test your code:
console.log("Easy 1 - Test 1:", easyProblem1("Platinum", 16)); // Should print: "can access"
console.log("Easy 1 - Test 2:", easyProblem1("Platinum", 15)); // Should print: "go home"

// ============================================
// EASY PROBLEM 2: Simple if-else statement
// ============================================
// Task: Check if age is 16 and passType is NOT "Platinum"
// Hint: Use if-else with !== operator
function easyProblem2(passType, age) {
    // TODO: Write your code here
    // If age is 16 AND passType is NOT "Platinum", return "can sign in"
    // Otherwise, return "go home"
    if (age === 16 && passType !== "Platinum") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Easy 2 - Test 1:", easyProblem2("Gold", 16)); // Should print: "can sign in"
console.log("Easy 2 - Test 2:", easyProblem2("Platinum", 16)); // Should print: "go home"

// ============================================
// MEDIUM PROBLEM: Multiple conditions with if-else if-else
// ============================================
// Task: Handle all three cases using if-else if-else
// Hint: Check conditions in order: first "Platinum" + 16, then 16 + not "Platinum", then else
function mediumProblem(passType, age) {
    // TODO: Write your code here
    // Use if-else if-else to handle all three cases:
    // 1. passType === "Platinum" && age === 16 → "can access"
    // 2. age === 16 && passType !== "Platinum" → "can sign in"
    // 3. Everything else → "go home"
    if (passType === "Platinum" && age === 16) {
        return "can access";
    } else if (age === 16 && passType !== "Platinum") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Medium - Test 1:", mediumProblem("Platinum", 16)); // Should print: "can access"
console.log("Medium - Test 2:", mediumProblem("Silver", 16)); // Should print: "can sign in"
console.log("Medium - Test 3:", mediumProblem("Bronze", 20)); // Should print: "go home"

// ============================================
// HARD PROBLEM: Function with nested if statements
// ============================================
// Task: Create a function that checks age first, then passType
// Hint: Use nested if statements - check age first, then passType inside
function hardProblem(passType, age) {
    // TODO: Write your code here
    // Step 1: Check if age is 16
    //   - If yes, check passType:
    //     - If passType is "Platinum" → return "can access"
    //     - If passType is NOT "Platinum" → return "can sign in"
    //   - If age is NOT 16 → return "go home"
    // Use nested if statements!

    if (age === 16) {
        if (passType === "Platinum") {
            return "can access";
        } else {
            return "can sign in";
        }
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Hard - Test 1:", hardProblem("Platinum", 16)); // Should print: "can access"
console.log("Hard - Test 2:", hardProblem("Gold", 16)); // Should print: "can sign in"
console.log("Hard - Test 3:", hardProblem("Platinum", 14)); // Should print: "go home"
console.log("Hard - Test 4:", hardProblem("Regular", 12)); // Should print: "go home"
