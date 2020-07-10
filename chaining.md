# Chaining


In JavaScript sometimes we can chain method calls, like this:
```javascript
car.start().drive()
```
This is possible if each method returns the object itself. In other words, the implementation must be something like this:
```javascript
const car = {
  start: function() {
    console.log('start')
    return this
  },
  drive: function() {
    console.log('drive')
    return this
  }
}
```