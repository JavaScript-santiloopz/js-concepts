# Glossary

### Execution Context
Refers to the `lexical environment` in which a certain portion of the source code is positioned. It is decisive to which environment do we have at reach at a given point in time.

### Global Context
The execution context which is not inside a `function`. In `JavaScript`, when you create variables and functions, they get registered in the global object, or global execution context.

### Outer Environment
When you running code which is not in the `Global Execution Context`, it has availabe an outer environment, being stuff that does not belong to the current execution environment but is still accessible.

### Expression
An instruction that will eventually evaluate to a value. In case the value is provided as it, then it is named **literal**.