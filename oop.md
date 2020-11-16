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