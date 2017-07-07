# preact-render-spy-error

This is a minimal reproduction of a potential bug with preact-render-spy, the error is

``` 
node_modules/preact-render-spy/src/preact-render-spy.js:19
  ),
  ^
SyntaxError: Unexpected token )
```

And is caused by the trailing comma after `nodeName` on [this line](https://github.com/mzgoddard/preact-render-spy/blob/master/src/preact-render-spy.js#L18)

Removing that trailing comma makes the test work fine.
