// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.


const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

describe("nameCap", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    expect(nameCap(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

//***RED***

// Good Fail
// $ /Users/learnacademy/Desktop/week-6-assessment-addisdave/node_modules/.bin/jest
//  FAIL  ./code-challenges.test.js
//   properCase
//     ✕ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (2 ms)

//   ● properCase › takes in an array of objects and returns an array with a sentence about each person with their name capitalized

//     ReferenceError: nameCap is not defined


// b) Create the function that makes the test pass.


// Psudocode

// Ceate a function called capName that iterates inside an array of objects.
// Inputs is an object.
// Output is array with a sentence about each person with their name capitalized
// Using a .map() built-in method to call on once for each element in array.
// Make the names be separated to indivigual letters or characters using built-in method
//  .split().
// Change the individual letter by using .toUpperCase() and calling the index on it using 
// .charAt()
// Use slice built-in method to return us the copy of the portion of array.
// Using the  .join() method the string conversions of all array elets are joined into one string
// Finaly return an array with string interpolation.



const nameCap = (object) => {
  return object.map(object => object.name
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ") + ` is ${object.occupation}.`

  )
}

//***GRN***
// PASS  ./code-challenges.test.js
// nameCap
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]


describe("zRemainders", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERs of the numbers when divided by 3", () => {
    expect(zRemainders(hodgepodge1)).toEqual([2, 0, -1, 0])
    expect(zRemainders(hodgepodge2)).toEqual([2, 1, -1])
  })
})

//***RED***

// FAIL  ./code-challenges.test.js
// zRemainders
//   ✕ takes in a mixed data array and returns an array of only the REMAINDERs of the numbers when divided by 3

// ● zRemainders › takes in a mixed data array and returns an array of only the REMAINDERs of the numbers when divided by 3

//   ReferenceError: zRemainders is not defined

// b) Create the function that makes the test pass.


// Psudocode

// Create a function called zRemainder.
// Input is a mix of caracters of numbers, boolean value and strings in an array.
// Output is an array of only the REMAINDERS of the numbers when divided by 3.
// Using .filter() built-in method, iterate through the array to filter out the numbers into an array of integers.
// Using typeof create a second array for the remaining integers. 
// Using .map method iterate the remaining integers array.
// Usign modulo operator %3 to put the remainders of integers in array. a


const zRemainders = (arr) => {
  
  let new_array = arr.filter(value => typeof value === "number")
      return new_array.map(value => value %3)
}

//***GRN***
// PASS  ./code-challenges.test.js
// zRemainders
//   ✓ takes in a mixed data array and returns an array of only the REMAINDERs of the numbers when divided by 3 (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
//   arr.map(value => {
//     if (typeof value === "number") {
//       integer_arr.push(value)
//     }
//   })
//   integer_arr.map(value => {
//     remainders_arr.push((value % 3))
//   })
//   return remainders_arr
// }
// remainders(hodgepodge1)
// remainders(hodgepodge2)

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125


describe("zCubed", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    expect(zCubed(cubeAndSum1)).toEqual(99)
    expect(zCubed(cubeAndSum2)).toEqual(1125)
  })
})

//***RED***

// FAIL  ./code-challenges.test.js
// zCubed
//   ✕ takes in an array of numbers and returns the sum of all the numbers cubed (1 ms)

// ● zCubed › takes in an array of numbers and returns the sum of all the numbers cubed

//   ReferenceError: zCubed is not defined

// b) Create the function that makes the test pass.

// PSUEDO CODE:
// Create a function called zCubed.
// Input is an array of numbers.
// Output is the sum of all the numbers cubed.
// Create an array to hold the numbers
// Using .map() built in method iterate through the array.
// operate on the numbers and push to new array
// return new array


const zCubed = (arr) => {
  let zero_sum = 0
  arr.map(value => {
    zero_sum += (value ** 3)
  })
  return zero_sum
}

zCubed(cubeAndSum1)
zCubed(cubeAndSum2)

//***GRN**

// PASS  ./code-challenges.test.js
//   zCubed
//     ✓ takes in an array of numbers and returns the sum of all the numbers cubed (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total