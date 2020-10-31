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