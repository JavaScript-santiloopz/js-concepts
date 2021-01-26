// A Set data structure allows to add data to a container.
// ECMAScript 6 (also called ES2015) introduced the Set data structure to the JavaScript world, along with Map
// A Set is a collection of objects or primitive types (strings, numbers or booleans),
// and you can think of it as a Map where values are used as map keys, with the map value always being a boolean true.

// Initialize
const s = new Set();

// Add items
s.add('one');
s.add('two');
// !You can’t add multiple elements to a set at the same time. You need to call add() multiple times.

// Check if an item is in the set
s.has('one'); // true
s.has('three'); // false

// Delete an item from a Set by key
s.delete('one');

// Determine the number of items in a Set
s.size;

// Delete all items from a Set
s.clear();

// Iterate the items in a Set
// Use the keys() or values() methods - they are equivalent:
for (const k of s.keys()) {
  console.log(k);
}

for (const k of s.values()) {
  console.log(k);
}

// The entries() method returns an iterator, which you can use like this:
const i = s.entries();
console.log(i.next());

// ! calling i.next() will return each element as a { value, done = false } object until the iterator ends, at which point done is true.
const i = s.entries();
console.log(i.next());

// calling i.next() will return each element as a { value, done = false } object until the iterator ends, at which point done is true.
// You can also use the forEach() method on the set:
s.forEach(v => console.log(v));

//or you can just use the set in a for..of loop:
for (const k of s) {
  console.log(k);
}

// Initialize a Set with values
const s = new Set([1, 2, 3, 4]);

// convert to array
const a = [...s.keys()];
// or
const a = [...s.values()];


