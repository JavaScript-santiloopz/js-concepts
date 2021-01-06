# General


### Architectural notes
On boot time, the `JavaScript Engine` bootstraps two things for us: the `global` object, i.e. a set of key value pairs accessible from anywhere in our runtime, and the `this` keyword, which gives us access to this very object. In the `browser`, the global object is the `window` of type `Window`.