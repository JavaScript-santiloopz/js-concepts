# Tagged Templates


It is a `JavaScript` Syntax feature, which boils down to a new way of calling functions that accept one or more strings as an argument, like so:

```javascript
const miTaggedTemplateLiteral = (strings, value, value2) => {
	return console.log(strings, value, value2);
}
```
We can invoque this string with an unusual backtick syntax after the method symbol name:
```javascript
const name = 'astronaut';
const age = 33;

miTaggedTemplateLiteral`Hi, I am ${name} and I am ${age} years old.`
// returns:
// ['Hi, I am ', ' and I am ',  years old.],
// 'astronaut',
// 33
```
You could also invoque an arbitrary number of parameters with the spread operator:
```javascript
const miTaggedTemplateLiteral = (strings, ...args) => {
	return console.log(strings, ...args);
}