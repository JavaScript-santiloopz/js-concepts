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
```

### Demonstration of Power
```javascript
const data = {
	name: "Google Pixel L",
	img: "http://example.com/miImagen.png",
	cost: 699,
};

const myProduct = generaTemplate`<article>
	<h1>${name}</h1>
	<img src="${img}" />
	<span>${cost} € </span>
</article>`(data);

console.log(myProduct);
/* "<article>
  <h1>Google Pixel L</h1>
  <img src=http://example.com/miImagen.png />
  <span>699 € </span>
</article>"
*/
```
And Generate Template would look like:
```javascript
const generaTemplate = (strings, ...keys) => {

	return (data) => {
		let temp = strings.slice();

		keys.forEach((key, i) => {
			temp[i] = temp[i] + data[key];
		});

		return temp.join('');
	}
}
```