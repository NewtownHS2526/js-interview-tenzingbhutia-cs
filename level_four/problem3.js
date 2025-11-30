// Level Four - Problem Set 3: Private Club Membership Access
// Logic Rules:
// - If memberTier is "Executive" AND age is 18 → return "can access"
// - If age is 18 AND memberTier is NOT "Executive" → return "can sign in"
// - Else → return "go home"

// ============================================
// EASY PROBLEM 1: Simple condition check
// ============================================
// Task: Write a simple if statement
// Hint: Just check one condition at a time
function easyProblem1(memberTier, age) {
    // TODO: Write your code here
    // If memberTier is "Executive" AND age is 18, return "can access"
    // Otherwise return "go home"

    if (memberTier === "Executive" && age === 18) {
        return "can access";
    }
    return "go home";
}

// Test your code:
console.log("Easy 1 - Test 1:", easyProblem1("Executive", 18)); // Should print: "can access"
console.log("Easy 1 - Test 2:", easyProblem1("Standard", 18)); // Should print: "go home"

// ============================================
// EASY PROBLEM 2: Using else statement
// ============================================
// Task: Use if-else to handle two cases
// Hint: if handles one case, else handles the other
function easyProblem2(memberTier, age) {
    // TODO: Write your code here
    // If age is 18 AND memberTier is NOT "Executive", return "can sign in"
    // Otherwise return "go home"

    if (age === 18 && memberTier !== "Executive") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Easy 2 - Test 1:", easyProblem2("Regular", 18)); // Should print: "can sign in"
console.log("Easy 2 - Test 2:", easyProblem2("Executive", 18)); // Should print: "go home"
console.log("Easy 2 - Test 3:", easyProblem2("Premium", 16)); // Should print: "go home"

// ============================================
// MEDIUM PROBLEM: Complete if-else if-else chain
// ============================================
// Task: Handle all three rules in one function
// Hint: Use if, else if, and else
function mediumProblem(memberTier, age) {
    // TODO: Write your code here
    // Create a complete if-else if-else chain:
    // 1. First check: memberTier === "Executive" && age === 18 → "can access"
    // 2. Second check: age === 18 && memberTier !== "Executive" → "can sign in"
    // 3. Everything else → "go home"

    if (memberTier === "Executive" && age === 18) {
        return "can access";
    } else if (age === 18 && memberTier !== "Executive") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Medium - Test 1:", mediumProblem("Executive", 18)); // Should print: "can access"
console.log("Medium - Test 2:", mediumProblem("Standard", 18)); // Should print: "can sign in"
console.log("Medium - Test 3:", mediumProblem("Executive", 16)); // Should print: "go home"
console.log("Medium - Test 4:", mediumProblem("VIP", 22)); // Should print: "go home"

// ============================================
// HARD PROBLEM: Complex nested conditions
// ============================================
// Task: Use nested if statements with multiple levels
// Hint: First check age, then check memberTier inside
function hardProblem(memberTier, age) {
    // TODO: Write your code here
    // Structure your code like this:
    // if (age is 18) {
    //     if (memberTier is "Executive") {
    //         return "can access"
    //     } else {
    //         return "can sign in"
    //     }
    // } else {
    //     return "go home"
    // }

    if (age === 18) {
        if (memberTier === "Executive") {
            return "can access";
        } else {
            return "can sign in";
        }
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Hard - Test 1:", hardProblem("Executive", 18)); // Should print: "can access"
console.log("Hard - Test 2:", hardProblem("Standard", 18)); // Should print: "can sign in"
console.log("Hard - Test 3:", hardProblem("Executive", 17)); // Should print: "go home"
console.log("Hard - Test 4:", hardProblem("Premium", 18)); // Should print: "can sign in"
console.log("Hard - Test 5:", hardProblem("Basic", 20)); // Should print: "go home"
