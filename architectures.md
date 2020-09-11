# Architectures

### By rendering strategy

* **SSR**: Server-Side Rendering - rendering a client-side or universal app to HTML on the server.
* **CSR**: Client-Side Rendering - rendering an app in a browser, generally using the DOM.
* **Rehydration**: “booting up” JavaScript views on the client such that they reuse the server-rendered HTML’s DOM tree and data.
* **Prerendering**: running a client-side application at build time to capture its initial state as static HTML.

#### Server Side Rendering
Generally produces a fast `First Paint (FP)` and `First Contentful Paint (FCP)`. Running page logic and rendering on the server makes it possible to avoid sending lots of JavaScript to the client, which helps achieve a fast `Time to Interactive (TTI)`. This makes sense, since with server rendering you’re really just sending text and links to the user’s browser. This approach can work well for a large spectrum of device and network conditions, and opens up interesting browser optimizations like streaming document parsing.  
There is one primary drawback to this approach: generating pages on the server takes time, which can often result in a slower `Time to First Byte (TTFB)`.  