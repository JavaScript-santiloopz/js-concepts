# Array methods and high order functions


### Remove one element from certain position in an Array
```javascript
array.splice(indexToRemove, numberOfElements);
```

### Swap positions in an Array
```javascript
const a = ['a', 'b', 'c', 'e', 'd'];

[a[3], a[4]] = [a[4], a[3]]
```

### Reduce
The `Array.prototype.reduce` is a higher order function takes two values, the current value and a `reducer` function to resolve the current value with a new one, this can be an addition, a multiplication... anything. Super powerful feature.


### Add element to the beginning with splice
```javascript
const colors = ['yellow', 'red'];

colors.splice(0, 0, 'blue');

//colors === ['blue', 'yellow', 'red']
```

### Shallow copy of arrays
You can do really easy with the spread operator
```javascript
const copyArray = [...oldArray];
```
