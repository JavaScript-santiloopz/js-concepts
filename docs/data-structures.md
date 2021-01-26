# Data Structures

### WeakSet

A `WeakSet` is a special kind of Set.

In a `Set`, items are **never garbage collected**. A `WeakSet` instead **lets all its items be freely garbage collected**. Every key of a WeakSet is an object. When the reference to this object is lost, the value can be garbage collected.

Here are the main differences:

    you cannot iterate over the WeakSet
    you cannot clear all items from a WeakSet
    you cannot check its size

A WeakSet is **generally used by framework-level code**, and only exposes these methods:

    add()
    has()
    delete()
