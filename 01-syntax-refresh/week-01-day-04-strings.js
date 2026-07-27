// console.log("Let's come on!!");

// function normalizeEmail(email) {
//   // Remove surrounding spaces
//   // Convert the email to lowercase
//   // Return the normalized email
//   const normalizedEmail = email.trim().toLowerCase();

//   if (normalizedEmail === "") {
//     return null;
//   }
//   return normalizedEmail;
// }

// console.log(normalizeEmail("  Vikas@Example.COM  "));
// console.log(normalizeEmail("USER@GMAIL.COM"));
// console.log(normalizeEmail("   ") === null);

// function isValidReportFile(fileName) {
//   // Normalize the file name
//   // It must start with "report-"
//   // It must end with ".pdf"
//   // Return true only when both conditions pass

//   const normalizedName = fileName.trim().toLowerCase();

//   return (
//     normalizedName.startsWith("report-") &&
//     normalizedName.endsWith(".pdf") &&
//     !normalizedName.includes("draft")
//   );
// }

// console.log(isValidReportFile("  Report-July.PDF  "));
// console.log(isValidReportFile("invoice-july.pdf"));
// console.log(isValidReportFile("report-july.docx"));
// console.log(isValidReportFile("report-final.pdf"));

// console.log(isValidReportFile("report-july.pdf")); // true
// console.log(isValidReportFile("report-draft.pdf")); // false
// console.log(isValidReportFile("report-july-draft.pdf")); // false
// console.log(isValidReportFile("draft-report-july.pdf")); // false

// function createSlug(title) {
//   const slugWords = [];
//   const normalizedTitle = title.trim().toLowerCase();
//   const words = normalizedTitle.split(" ");

//   for (const word of words) {
//     if (word !== "") {
//       slugWords.push(word);
//     }
//   }

//   const slug = slugWords.join("-");

//   if (slug === "") {
//     return null;
//   }

//   return slug;
// }

// console.log(createSlug("JavaScript String Methods"));
// // javascript-string-methods

// console.log(createSlug("   Build   a   Node API   "));
// // build-a-node-api

// console.log(createSlug("BACKEND DEVELOPMENT"));
// // backend-development

// console.log(createSlug("    "));
// // null

// // Business rules:

// // Ignore surrounding spaces.
// // Return the extension in lowercase.
// // Use the final dot.
// // Return null when there is no dot.
// // Return null when nothing appears after the final dot.

// function getFileExtension(fileName) {
//   const trimmedFileName = fileName.trim();
//   const lastIndexOfDot = trimmedFileName.lastIndexOf(".");
//   //   console.log(lastIndexOfDot);

//   if (lastIndexOfDot === -1) {
//     return null;
//   }
//   const extension = trimmedFileName.slice(lastIndexOfDot + 1);
//   //   console.log("Extension:" + extension + "test");

//   if (extension === "") {
//     return null;
//   }
//   return extension.toLowerCase();
// }

// console.log(getFileExtension("report.pdf")); // "pdf"
// console.log(getFileExtension("employee.data.json")); // "json"
// console.log(getFileExtension("README")); // null
// console.log(getFileExtension("  PHOTO.JPG  ")); // "jpg"
// console.log(getFileExtension("  test.  ")); // null

// function reverseString(text) {
//   const textArray = text.split("");
//   textArray.reverse();
//   //   console.log(textArray);

//   return textArray.join("");
// }

// console.log(reverseString("JavaScript")); // expected: "tpircSavaJ"
// console.log(reverseString("Node API")); // expected: "IPA edoN"
// console.log(reverseString("a")); // expected: "a"
// console.log(reverseString("")); // expected: ""
// console.log(reverseString("Hello!")); // expected: "!olleH"

// Business rules:
// Ignore uppercase and lowercase differences.
// Ignore spaces anywhere in the text.
// Return false for an empty or whitespace-only string.
// Return a boolean.
// You may reuse the existing reverseString() function.

// function isPalindrome(text) {
//   const normalizedWord = text.trim().toLowerCase().split(" ").join("");
//   const reverseWord = normalizedWord.split("").reverse().join("");

//   return normalizedWord !== "" && normalizedWord === reverseWord;
// }

// console.log(isPalindrome("level")); // expected: true
// console.log(isPalindrome("JavaScript")); // expected: false
// console.log(isPalindrome("Never odd or even")); // expected: true
// console.log(isPalindrome("Race Car")); // expected: true
// console.log(isPalindrome("   ")); // expected: false

// Business rules:
// Remove unnecessary spaces from the beginning and end.
// Treat multiple spaces between words as separators, not as extra words.
// Return the number of actual words.
// Return 0 for an empty or whitespace-only sentence.
// Punctuation attached to a word remains part of that word.

function countWords(sentence) {
  // Write your logic here
  let count = 0;
  const normalizedWords = sentence.trim().split(" ");
  for (const word of normalizedWords) {
    if (word !== "") {
      count++;
    }
  }
  return count;
}

console.log(countWords("JavaScript is useful")); // expected: 3
console.log(countWords("   Build   a   Node API   ")); // expected: 4
console.log(countWords("Hello, backend world!")); // expected: 3
console.log(countWords("one")); // expected: 1
console.log(countWords("     ")); // expected: 0
console.log(countWords("")); // expected: 0
