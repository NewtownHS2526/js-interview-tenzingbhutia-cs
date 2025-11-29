// Level Two - Problem Set 5: Shopping Mall Discount Access
// Logic Rules:
// - If customerType is "Elite" AND age is 21 → return "can access"
// - If age is 21 AND customerType is NOT "Elite" → return "can sign in"
// - Else → return "go home"

// ============================================
// EASY PROBLEM 1: Simple if with two conditions
// ============================================
// Task: Use && to check both customerType and age
// Hint: Both conditions must be true for && to work
function easyProblem1(customerType, age) {
    // TODO: Write your code here
    // If customerType is "Elite" AND age is 21, return "can access"
    // Otherwise return "go home"
    if (customerType === "Elite" && age === 21) {
        return "can access";
    }
    return "go home";
}

// Test your code:
console.log("Easy 1 - Test 1:", easyProblem1("Elite", 21)); // Should print: "can access"
console.log("Easy 1 - Test 2:", easyProblem1("Elite", 20)); // Should print: "go home"
console.log("Easy 1 - Test 3:", easyProblem1("Regular", 21)); // Should print: "go home"

// ============================================
// EASY PROBLEM 2: If-else with !== operator
// ============================================
// Task: Check if customerType is different from "Elite"
// Hint: !== checks if values are NOT equal
function easyProblem2(customerType, age) {
    // TODO: Write your code here
    // If age is 21 AND customerType is NOT "Elite", return "can sign in"
    // Otherwise return "go home"
    if (age === 21 && customerType !== "Elite") {
        return "can sign in";
    }
    return "go home";
}

// Test your code:
console.log("Easy 2 - Test 1:", easyProblem2("Standard", 21)); // Should print: "can sign in"
console.log("Easy 2 - Test 2:", easyProblem2("Elite", 21)); // Should print: "go home"
console.log("Easy 2 - Test 3:", easyProblem2("Premium", 19)); // Should print: "go home"

// ============================================
// MEDIUM PROBLEM: Complete conditional chain
// ============================================
// Task: Write all three conditions using if-else if-else
// Hint: Check each condition carefully
function mediumProblem(customerType, age) {
    // TODO: Write your code here
    // Write a complete if-else if-else chain:
    // 
    // if (first condition) {
    //     return "can access"
    // } else if (second condition) {
    //     return "can sign in"
    // } else {
    //     return "go home"
    // }
    //
    // Remember: Check customerType === "Elite" && age === 21 first!
    if (customerType === "Elite" && age === 21) {
        return "can access";
    } else if (age === 21 && customerType !== "Elite") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Medium - Test 1:", mediumProblem("Elite", 21)); // Should print: "can access"
console.log("Medium - Test 2:", mediumProblem("Standard", 21)); // Should print: "can sign in"
console.log("Medium - Test 3:", mediumProblem("Elite", 19)); // Should print: "go home"
console.log("Medium - Test 4:", mediumProblem("Premium", 21)); // Should print: "can sign in"
console.log("Medium - Test 5:", mediumProblem("VIP", 25)); // Should print: "go home"

// ============================================
// HARD PROBLEM: Advanced nested conditions
// ============================================
// Task: Use nested if-else statements with proper structure
// Hint: Think about the logic flow - what should be checked first?
function hardProblem(customerType, age) {
    // TODO: Write your code here
    // Create nested if statements:
    //
    // First, check if age is 21:
    //   - If age is 21:
    //     - Check customerType:
    //       - If customerType is "Elite" → return "can access"
    //       - If customerType is anything else → return "can sign in"
    //   - If age is NOT 21:
    //     - Return "go home"
    //
    // Why is this structure better? Think about it!
    if (age === 21) {
        if (customerType === "Elite") {
            return "can access";
        } else {
            return "can sign in";
        }
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Hard - Test 1:", hardProblem("Elite", 21)); // Should print: "can access"
console.log("Hard - Test 2:", hardProblem("Standard", 21)); // Should print: "can sign in"
console.log("Hard - Test 3:", hardProblem("Elite", 20)); // Should print: "go home"
console.log("Hard - Test 4:", hardProblem("Premium", 21)); // Should print: "can sign in"
console.log("Hard - Test 5:", hardProblem("VIP", 30)); // Should print: "go home"
console.log("Hard - Test 6:", hardProblem("Regular", 21)); // Should print: "can sign in"
