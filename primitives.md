# Primitives

### Object
Javascript objects are just `HashMap` of related properties, where the keys are Strings only.
```javascript
// create an empty object - no class was needed !!
const superhero = {};
 
superhero.name = 'Superman';  
superhero.strength = 100;
```

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

###### How to avoid `callback hell`. 
When you need to chain promises, you can end up in this situation where everything get's chained, there's a bunch of undesired nesting and code becomes hard to read and maintain.  
To avoid it, just declare every new step of the callback chain as a first level function and return the result of one promise inside the `then`, so you can apply a next `then` to the result that remains as a first level step of the callback.
