// ==================
// What is recursion?
// ==================
// A function that calls itself until it stops, usually when a condition is met.
// It's very important that you have a way to stop the recursion otherwise you'll get an infinite loop and break all the things. 
// Recursion is great when you have a variable depth, like a nesting objects, and/or the amount of looping needed is variable/unknown.

// =============================
// Javascript code for recursion
// =============================

let factorial = (n) => {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

// -----------------

let addAllThethings = (n) => {
  if (n <= 1) return n;
  return n + addAllThethings(n - 1)
}

// -----------------

// ===================================================
// What is the maximum amount of recursion you can do?
// ===================================================
// A way to find out the maximum call stack, basically how many recursive calls you can make. Call stack size also depends on how many parameters and/or local variables are being used. If you add variables to the function below, the returned number will be less.
let computeMaxCallStackSize = () => {
  try {
    return 1 + computeMaxCallStackSize();
  } catch (e) {
    // Call stack overflow
    return 1;
  }
}

// -----------------
