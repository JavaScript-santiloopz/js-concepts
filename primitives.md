# Primitives

### Object
Javascript objects are just `HashMap` of related properties, where the keys are Strings only.
```javascript
// create an empty object - no class was needed !!
const superhero = {};
 
superhero.name = 'Superman';  
superhero.strength = 100;
```
* `Object.freeze(objRef);`
To avoid property mutation on a certain object.

### Function
Functions in Javascript are just values of type `Function`, it's a simple as that! 
```javascript
const flyFunction = function() {  
    console.log('Flying like a bird!');
};

const superhero = {};
 
superhero.fly = flyFunction;

// prints 'Flying like a bird!' to the console
superhero.fly();
```

### Set
Creates a set, or collection of non reapeated elements (removed duplicates).
```javascript
const mySet = new Set([1, 1, 2, 3, 4]); // keeps 1, 2, 3, 4
```

### Promises
// TODO

### Map
// TODO
