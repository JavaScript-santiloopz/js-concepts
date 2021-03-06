# Questions

1. What gets logged in the following scenario?
```javascript
const map = ['a', 'b', 'c'].map.bind([1, 2, 3]);
map(el => console.log(el));
```
Answer: `1 2 3`
Explanation: `['a', 'b', 'c'].map`, when called, will call `Array.prototype.map` with a this value of `['a', 'b', 'c']`. But, when used as a reference, rather than called, `['a', 'b', 'c'].map` is simply a reference to `Array.prototype.map`.  
`Function.prototype.bind` will `bind` the this of the function to the first parameter (in this case, that's `[1, 2, 3]`), and invoking `Array.prototype.map` with such a this results in those items being iterated over and logged.
