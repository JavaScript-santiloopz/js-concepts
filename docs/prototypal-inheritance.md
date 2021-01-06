# Prototypal Inheritance


In Javascript, there is no class inheritance, instead objects can inherit directly from other objects. The way this works is that each object has an implicit property that points to a 'parent' object.

That property is called `__proto__`, and the parent object is called the object's prototype, hence the name Prototypal Inheritance.

When looking up a property, Javascript will try to find the property in the object itself. If it does not find it then it tries in it's prototype, and so on. For example:  

```javascript
var avengersHero = {  
	editor: 'Marvel'
};

var ironMan = {};

ironMan.__proto__ = avengersHero;

// Iron Man is copyrighted by Marvel
console.log('Iron Man is copyrighted by ' + ironMan.editor);
```