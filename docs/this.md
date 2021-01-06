# This


Let's start with an example:
```javascript
const superman = {
 
  heroName: 'Superman',  
 
  sayHello: function() {
      console.log("Hello, I'm " + this.heroName );
  }  
};

// Hello, I'm Superman
superman.sayHello();  
```

###### What if we pass the function around?
```javascript
const failThis = superman.sayHello;
 
 // Hello, I'm undefined
failThis();
```
This is because the variable failThis belongs to the global scope, which contains no member variable named heroName. To solve this:
```javascript
const hello = superman.sayHello;
 
 // Hello, I'm undefined
hello.call(superman);
```