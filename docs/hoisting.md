# Hoisting

JavaScript parses the executed file once before execution, scans all functions and symbols and **hoists them**, creating the memory space for symbols and functions. So the `execution context` of our environment looks like this after this procedure:
1. Global Object
1. `this`
1. Outer Environment
1. Memory space for vars and functions (**Hoisting**)
When it comes to **function** the whole set of instructions and definition of the function is hoisted, however, for variables, it just creates the memory position initially set to `undefined`. This prevents to throw errors if we try to read the variable before it's decalration.