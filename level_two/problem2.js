// Level Two - Problem Set 2: Streaming Service Premium Access
// Logic Rules:
// - If subscriptionPlan is "Ultimate" AND age is 21 → return "can access"
// - If age is 21 AND subscriptionPlan is NOT "Ultimate" → return "can sign in"
// - Else → return "go home"

// ============================================
// EASY PROBLEM 1: Using comparison operators
// ============================================
// Task: Use === to check exact match
// Hint: === checks both value and type
function easyProblem1(subscriptionPlan, age) {
    // TODO: Write your code here
    // Use === to check if subscriptionPlan equals "Ultimate" AND age equals 21
    // Return "can access" if true, otherwise "go home"
    if (subscriptionPlan === "Ultimate" && age === 21) {
        return "can access";
    }
    return "go home";
}

// Test your code:
console.log("Easy 1 - Test 1:", easyProblem1("Ultimate", 21)); // Should print: "can access"
console.log("Easy 1 - Test 2:", easyProblem1("ultimate", 21)); // Should print: "go home" (case sensitive!)

// ============================================
// EASY PROBLEM 2: Using !== operator
// ============================================
// Task: Check if subscriptionPlan is NOT "Ultimate" when age is 21
// Hint: !== means "not equal to"
function easyProblem2(subscriptionPlan, age) {
    // TODO: Write your code here
    // Check if age is 21 AND subscriptionPlan is NOT "Ultimate"
    // Return "can sign in" if true, otherwise "go home"
    if (age === 21 && subscriptionPlan !== "Ultimate") {
        return "can sign in";
    }
    return "go home";
}

// Test your code:
console.log("Easy 2 - Test 1:", easyProblem2("Basic", 21)); // Should print: "can sign in"
console.log("Easy 2 - Test 2:", easyProblem2("Ultimate", 21)); // Should print: "go home"

// ============================================
// MEDIUM PROBLEM: Combining multiple conditions
// ============================================
// Task: Use && operator to combine conditions
// Hint: Think about the order of operations
function mediumProblem(subscriptionPlan, age) {
    // TODO: Write your code here
    // Use if-else if-else with && operator
    // Make sure to check all three conditions correctly
    // Remember: && means BOTH conditions must be true
    if (subscriptionPlan === "Ultimate" && age === 21) {
        return "can access";
    } else if (age === 21 && subscriptionPlan !== "Ultimate") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Medium - Test 1:", mediumProblem("Ultimate", 21)); // Should print: "can access"
console.log("Medium - Test 2:", mediumProblem("Standard", 21)); // Should print: "can sign in"
console.log("Medium - Test 3:", mediumProblem("Ultimate", 20)); // Should print: "go home"
console.log("Medium - Test 4:", mediumProblem("Premium", 25)); // Should print: "go home"

// ============================================
// HARD PROBLEM: Function with multiple nested conditions
// ============================================
// Task: Check age first, then create nested conditions for subscriptionPlan
// Hint: Use if inside if (nested if statements)
function hardProblem(subscriptionPlan, age) {
    // TODO: Write your code here
    // Step 1: Check if age equals 21
    //   - If age is 21:
    //     - Check if subscriptionPlan is "Ultimate" → return "can access"
    //     - Else (subscriptionPlan is not "Ultimate") → return "can sign in"
    //   - If age is NOT 21:
    //     - Return "go home"
    // Use nested if-else statements!

    if (age === 21) {
        if (subscriptionPlan === "Ultimate") {
            return "can access";
        } else {
            return "can sign in";
        }
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Hard - Test 1:", hardProblem("Ultimate", 21)); // Should print: "can access"
console.log("Hard - Test 2:", hardProblem("Basic", 21)); // Should print: "can sign in"
console.log("Hard - Test 3:", hardProblem("Ultimate", 19)); // Should print: "go home"
console.log("Hard - Test 4:", hardProblem("Premium", 21)); // Should print: "can sign in"
console.log("Hard - Test 5:", hardProblem("Ultimate", 22)); // Should print: "go home"
