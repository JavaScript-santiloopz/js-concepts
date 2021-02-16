# Gotchas

In JavaScript, we CANNOT pass variables to functions, we can ONLY pass values.
The value cannot be mutated.
```javascript
function double(x) {
  x = x * 2;
}

let money = 10;
double(money);
console.log(money); // 10
```

### assigning to primitives
```javascript
null = 10;
console.log(null);
```
**It is an error because the left side of assignment must always be a “wire”**. Variables are “wires”, so they can appear on the left side. A literal like null is not a “wire”, so trying to assign something to it is meaningless.