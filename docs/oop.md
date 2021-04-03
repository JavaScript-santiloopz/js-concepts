# Object Oriented JavaScript

### Constructor Functions
```javascript
function SuperHero(name, strength) {  
    this.name = name;
    this.strength = strength;
}

var superman = new SuperHero('Superman', 100);
 
console.log('Hello, my name is ' + superman.name); 
```
Notice the capitalized name, indicating that it's a constructor function.

### Why is this syntax not recommended?
It creates copies of methods for every object, whereas `prototype` only holds one copy and all inherited objects point to it.

### Is there a recommended alternative to new?
The recommended way to go is to ignore the Javascript `new` operator altogether and use `Object.create`:
```javascript
var superHeroPrototype = {  
   sayHello: function() {
        console.log('Hello, my name is ' + this.name);
    } 
};
 
var superman = Object.create(superHeroPrototype);  
superman.name = 'Superman';
```

### Cloning
There are different ways:
```javascript
const newObj = Object.assign({}, objToClone);
```

### Immutability tricks
```javascript
const newObj = { foo: 'bar' };

// disables the haebility to add new properties to an object
Object.preventExtension(newObj);

// Same as prevent extension but also prevents you from deleting properties or changing the nature of
// them, NOTE, the values can still be changed, but the configurable JS engine representation of them
// will be disabled
Object.seal(newObj);

// The most extreme of them, makes the object fully immutable
Object.freeze(newObj);
```