# Namespaces


### What is namespacing?
Namespacing is the act of wrapping a set of entities, variables, functions, objects under a single umbrella term.  
  
JavaScript has various ways to do that, and seeing the examples will make the concept easier to understand.  
  
The simplest way to create a namespace is by creating an object literal:  
```javascript
const car = {
  start: () => {
    console.log('start')
  },
  stop: () => {
    console.log('stop')
  }
}
```
In this way, start and stop are namespaced under `car`: `car.start()` and `car.stop()`.  
  
They are not polluting the global object.  
  
Why is this important? One good reason is that nothing can interfere with them.  
  
But they are still accessible from the outside, thanks to the car object reference.  
  
The best way to completely hide code from the outside is to wrap it into a block, which is a part of code wrapped in curly brackets, like an if or for block, but also an independent block formed like this:  

```javascript
{
	const start = () => {
		console.log('start')
	}

	const stop = () => {
		console.log('stop')
	}

	start(); // start
	stop(); // stop
}
```
This code will be executed as soon as it is processed by the JS parser  
  
Those 2 functions are now inaccessible outside of the block.  
  
But you need to pay attention at always using let or const, which are block scoped.  
  
Using var instead would “leak” it outside of the block.  
  
To workaround that you can use functions, which is the “old”, pre-let/const way:  

```javascript
(function() {
  var start = () => {
    console.log('start')
  }

  const stop = () => {
    console.log('stop')
  }
})()
```