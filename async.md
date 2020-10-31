# Asynchronous JavaScript


### Promises
#### Promise All
Resolution order:
```javascript
const timer = a => {
  return new Promise(res =>
    setTimeout(() => {
      res(a);
    }, Math.random() * 100)
  );
};

const all = Promise.all([
  timer('first'),
  timer('second')
]).then(data => console.log(data));
```
`Promise.all` will resolve in the same order in which promises where added to the array param, so doesn't matter which one solves first, it will always be as slow as the slowest promise to resolve.

###### How to avoid `callback hell`. 
When you need to chain promises, you can end up in this situation where everything get's chained, there's a bunch of undesired nesting and code becomes hard to read and maintain.  
To avoid it, just declare every new step of the callback chain as a first level function and return the result of one promise inside the `then`, so you can apply a next `then` to the result that remains as a first level step of the callback.
