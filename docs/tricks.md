# Tricks

### Transfor value to number
Before you used to go with `parseInt`, now it is possible to:
```javascript
const numberValue = Number(value);
```

### String
How to Copy a String Multiple Times
```javascript
// Concatenate "ha" 3 times.
const laughing = "ha".repeat(3);
console.log(laughing); // "hahaha"

// Concatenate "1" 8 times.
const eightBits = "1".repeat(8);
console.log(eightBits ); // "11111111
```
How to Pad a String to a Specific Length
```javascript
const eightBits = "001".padStart(8, "0");
console.log(eightBits); // "00000001"

// Add "*" to the end until the string has a length of 5.
const anonymizedCode = "34".padEnd(5, "*");
console.log(anonymizedCode); // "34***"
```
How to Copy a String Multiple Times
```javascript
How to Split a String Into an Array of Characters
const word = "apple";
const characters = [...word];
console.log(characters); // ["a", "p", "p", "l", "e"]
```
How to Count Characters in a String
```javascript
const word = "apple";
console.log(word.length); // 5
```
How to Reverse Characters in a String 
```javascript
const reversedWord = [...word].reverse().join("");
```
How to Capitalize (Uppercase) the First Letter in a String 
```javascript
word = word[0].toUpperCase() + word.substr(1);
```
How to Split a String on Multiple Separators
```javascript
// Let's split on comma (,) and semicolon (;).
const list = "apples,bananas;cherries"
const fruits = list.split(/[,;]/);
console.log(fruits); // ["apples", "bananas", "cherries"]
```
How to Check If a String Contains a Specific Sequence 
```javascript
const text = "Hello, world! My name is Kai!"
console.log(text.includes("Kai")); // true
```
How to Check If a String Starts or Ends With a Specific Sequence 
```javascript
const text = "Hello, world! My name is Kai!"

console.log(text.startsWith("Hello")); // true

console.log(text.endsWith("world")); // false
```
How to Replace All Occurrences of a String 
```javascript
const text = "I like apples. You like apples."

console.log(text.replace(/apples/g, "bananas"));
// "I like bananas. You like bananas."

console.log(text.replaceAll("apples", "bananas"));
// "I like bananas. You like bananas."

```