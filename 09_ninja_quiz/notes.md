# 8. Project - Interactive Ninja Quiz

To scroll to the top we use an method that it's on `window` object

```js
scrollTo(0, 0);
```
`setTimeout` runs the function once
```js
setTimeout(() => {
  // do something
}, 3000)
```

`setInterval` repeats the function every time we declare. This needs a `clearInterval` to stop the loop and for that we assign the interval to a variable

```js
const timer = setInterval(() => {
  // do something
}, 10);

clearInterval(timer);

```