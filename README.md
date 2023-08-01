# Node.js Tasks

This repository contains solutions for three Node.js tasks.

## Task 1: Basic Node.js Server

### Description
Create a simple Node.js server that listens on port 3000 and responds with "Hello, World!" for all incoming HTTP requests.

### How to Run
1. Open the terminal and navigate to the directory containing the server code.
2. Run the server using the following command:

3. The server will now be running on http://localhost:3000.
4. Visit http://localhost:3000 in your web browser or send an HTTP request to it using tools like cURL or Postman to receive the response "Hello, World!".

## Task 2: Data Manipulation

### Description
Write a function in Node.js that takes an array of integers as input and returns the sum of all the numbers.

### How to Use
1. Open the terminal and navigate to the directory containing the `dataManipulation.js` file.
2. Use the function `sumArrayIntegers(arr: number[]): number` to calculate the sum of an array of integers.

```javascript
const dataManipulation = require('./dataManipulation');

const myArray = [1, 2, 3, 4, 5];
const result = dataManipulation.sumArrayIntegers(myArray);
console.log(result); // Output will be 15 (1 + 2 + 3 + 4 + 5)

## Task 3: Asynchronous File Handling
### Description
A Node.js script that reads a text file named "data.txt" asynchronously and counts the number of words in it. The script prints the total word count to the console.

### How to Run
Make sure you have Node.js installed on your machine.
Place the script in the same directory as the "data.txt" file.
Open a terminal or command prompt and navigate to the project folder.
Run the script using the command: node script.js (or replace script.js with the filename of your script).
The script will read "data.txt", count the number of words in it, and print the total word count to the console.
