# General

JavaScript was developed in 1995 by `SUN Microsystems` and `NetScape foundation`, heavily inspired in `scheme`. The project was taken over in 10 days, under the management on `Brendan Eich`. After the initial mess and lack of consensus, the `ECMA` organization took over the responsability of setting up the standard for `JavaScript` and named it `EcmaScript`.

The initial codename was `Mocha`, then it was renamed to `LiveScript` and ended up being named `JavaScript`, thou Microsoft made a version of it named `JScript`.

On of the strengths and dangers of `JavaScript` is that the whole runtime is overridable by design. We can override `functions` in `String` or `Number` if we so want.


### Architectue
On boot time, the `JavaScript Engine` bootstraps two things for us: the `global` object, i.e. a set of key value pairs accessible from anywhere in our runtime, and the `this` keyword, which gives us access to this very object. In the `browser`, the global object is the `window` of type `Window`.