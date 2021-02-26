# Math

### Special Numbers
It is worth noting that floating point math includes a few special numbers. You might occasionally run into `NaN`, `Infinity`, `-Infinity`, and `-0`. They exist because sometimes you might execute operations like `1 / 0`, and `JavaScript` needs to represent their result somehow. The floating point math standard specifies how they work, and what happens when you use them.
Here’s how special numbers may come up in your code:
```javascript
let scale = 0;
let a = 1 / scale; // Infinity
let b = 0 / scale; // NaN
let c = -a; // -Infinity
let d = 1 / c; // -0
```

### NaN
`NaN`, which is the result of `0 / 0` and some other invalid math, stands for “not a number”.
You might be confused by why it claims to be a number:
```javascript
console.log(typeof(NaN)); // "number"
```

However, there is no trick here. From `JavaScript` perspective, `NaN` is a numeric value. It is not `null`, `undefined`, a `string`, or some other type. But in the `floating point math`, the name for that term is “not a number”. So it is a `numeric value`. It happens to be called “not a number” because it represents an invalid result.
