// Level Five - Problem Set 4: Private Jet Charter Access
// Logic Rules:
// - If clientLevel is "Platinum" AND age is 21 → return "can access"
// - If age is 21 AND clientLevel is NOT "Platinum" → return "can sign in"
// - Else → return "go home"

// ============================================
// EASY PROBLEM 1: Basic if condition
// ============================================
// Task: Check two conditions with &&
// Hint: && means both must be true
function easyProblem1(clientLevel, age) {
    // Check if clientLevel is "Platinum" AND age is 21
    if (clientLevel === "Platinum" && age === 21) {
        return "can access";
    }
    // Otherwise "go home"
    return "go home";
}

// Test your code:
console.log("Easy 1 - Test 1:", easyProblem1("Platinum", 21)); // Should print: "can access"
console.log("Easy 1 - Test 2:", easyProblem1("Platinum", 20)); // Should print: "go home"
console.log("Easy 1 - Test 3:", easyProblem1("Gold", 21)); // Should print: "go home"

// ============================================
// EASY PROBLEM 2: Using !== in condition
// ============================================
// Task: Check if something is NOT equal
// Hint: !== means "not equal to"
function easyProblem2(clientLevel, age) {
    // Check if age is 21 AND clientLevel is NOT "Platinum"
    if (age === 21 && clientLevel !== "Platinum") {
        return "can sign in";
    }
    // Otherwise "go home"
    return "go home";
}

// Test your code:
console.log("Easy 2 - Test 1:", easyProblem2("Gold", 21)); // Should print: "can sign in"
console.log("Easy 2 - Test 2:", easyProblem2("Platinum", 21)); // Should print: "go home"
console.log("Easy 2 - Test 3:", easyProblem2("Silver", 19)); // Should print: "go home"

// ============================================
// MEDIUM PROBLEM: Multiple conditions with else if
// ============================================
// Task: Use if-else if-else to check all cases
function mediumProblem(clientLevel, age) {
    // Case 1: Platinum + age 21
    if (clientLevel === "Platinum" && age === 21) {
        return "can access";
    }
    // Case 2: Age 21 but NOT Platinum
    else if (age === 21 && clientLevel !== "Platinum") {
        return "can sign in";
    }
    // Case 3: Everything else
    else {
        return "go home";
    }
}

// Test your code:
console.log("Medium - Test 1:", mediumProblem("Platinum", 21)); // Should print: "can access"
console.log("Medium - Test 2:", mediumProblem("Gold", 21)); // Should print: "can sign in"
console.log("Medium - Test 3:", mediumProblem("Platinum", 19)); // Should print: "go home"
console.log("Medium - Test 4:", mediumProblem("Silver", 21)); // Should print: "can sign in"
console.log("Medium - Test 5:", mediumProblem("Bronze", 25)); // Should print: "go home"

// ============================================
// HARD PROBLEM: Deeply nested if statements
// ============================================
// Task: Create nested if-else statements
function hardProblem(clientLevel, age) {
    // Check age first
    if (age === 21) {
        // Now check client level
        if (clientLevel === "Platinum") {
            return "can access";
        } else {
            return "can sign in";
        }
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Hard - Test 1:", hardProblem("Platinum", 21)); // Should print: "can access"
console.log("Hard - Test 2:", hardProblem("Gold", 21)); // Should print: "can sign in"
console.log("Hard - Test 3:", hardProblem("Platinum", 20)); // Should print: "go home"
console.log("Hard - Test 4:", hardProblem("Silver", 21)); // Should print: "can sign in"
console.log("Hard - Test 5:", hardProblem("Bronze", 18)); // Should print: "go home"
console.log("Hard - Test 6:", hardProblem("Diamond", 21)); // Should print: "can sign in"
