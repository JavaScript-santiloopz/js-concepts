// A Map data structure allows to associate data to a key.

const m = new Map()

// set values
m.set('color', 'red')
m.set('age', 2)

// get values
const color = m.get('color')
const age = m.get('age')

// delete an item
m.delete('color')

// delete all items
m.clear()

// check if contains key
const hasColor = m.has('color')

// number of items
const size = m.size

// init map
const m = new Map([['color', 'red'], ['owner', 'Santi'], ['age', 2]])

// quirks
// Just like any value (object, array, string, number) can be used as the value of the key-value entry of a map item, any value can be used as the key, even objects.
const m = new Map()
m.set(NaN, 'test')
m.get(NaN) //test

// iterate over map keys
for (const k of m.keys()) {
  console.log(k)
}

// and over values
for (const v of m.values()) {
  console.log(v)
}

// even key value pairs!
for (const [k, v] of m.entries()) {
  console.log(k, v)
}
// shorter version
for (const [k, v] of m) {
  console.log(k, v)
}

// Convert the map keys into an array
const a = [...m.keys()]

// Convert the map values into an array
const a = [...m.values()]

// WeakMap
// In a map object, items are never garbage collected. A WeakMap instead lets all its items be freely garbage collected.
// Every key of a WeakMap is an object. When the reference to this object is lost, the value can be garbage collected.
// The differences with a map are:

    // you cannot iterate over the keys or values (or key-values) of a WeakMap
    // you cannot clear all items from a WeakMap
    // you cannot check its size
