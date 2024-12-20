function isPalindrome(str) {
  // Reverse the string
  let reversedStr = str.split("").reverse().join("");

  // Log original and reversed strings
  console.log("Original string:", str);
  console.log("Reversed string:", reversedStr);

  // Check if they are equal
  return str === reversedStr;
}

// Get input from the user
let inputString = prompt("Enter a string:");

// Check if the input is valid
if (inputString === null || inputString.trim() === "") {
  console.log("Invalid input. Please enter a string.");
} else {
  // Check if the string is a palindrome
  let isPal = isPalindrome(inputString);
  console.log("Is it a palindrome?", isPal);
}

    
