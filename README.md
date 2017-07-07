# preact-render-spy-error

This is a minimal reproduction of a potential bug with preact-render-spy.

System

Mac OS 10.11.6
Node v7.8.0

Steps to reproduce

1. `git clone git@github.com:conorcussell/preact-render-spy-error.git`
2. `cd preact-render-spy-error`
3. `npm i`
4. `npm test`

This gives me this error

``` 
node_modules/preact-render-spy/src/preact-render-spy.js:19
  ),
  ^
SyntaxError: Unexpected token )
```

And is caused by the trailing comma after `nodeName` on [this line](https://github.com/mzgoddard/preact-render-spy/blob/master/src/preact-render-spy.js#L18)

Removing that trailing comma makes the test work fine.
