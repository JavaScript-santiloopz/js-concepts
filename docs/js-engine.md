# JS Engine

### Available JS Engines
#### Google V8
Powers the JS for `chrome` and `node`.

#### Mozilla SpiderMonkey
Powers the JS for `firefox` and there is even a `node` flavour that uses it (SpiderNode).

#### Microsoft Chakra
Powers the JS for `edge`. The main part of Chakra engine is opensourced as `ChakraCore` and there is also a `node` flavour that uses it.

#### Apple's JSC (JavaScriptCore)
Powers `safari` and `React Native`.

Current JS interpreters work in a `JIT` fashion transpiling JS code to C++, which in turn gets transpiled to `C`, which goes to `Assembly Instructions`.

### Flow
When you run JavaScript, it will create a `Global Execution Context` for you, containing the `this` keyword and appending all the symbol names to the Global Object (window in case of the browser).  
Whenever you find a new Function Call, it will create a new, scoped Execution Context for that function.