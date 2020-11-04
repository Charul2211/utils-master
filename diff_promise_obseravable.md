**Observable**
- An observables can emit any number of values.
- Cancellable
- Unicast : The subscriber function of an observable is executed on each call to subscribe on this observable. Therefore, observables perform unicast, because there is a separate execution and result value for each subscriber.


**Promises**
- A promise can only emit a single value
- Non-Cancellable
- Multicast : The executor function of a promise is executed exactly once (when the promise is created). This means, that all the calls to then on a given promise object just “tap” into the ongoing execution of the executor function and in the end get a copy of the result value. Therefore, promises perform multicast, because the same execution and result value is used for multiple “subscribers”.




```javascript
let getData = (i) => new Promise((resolve, reject) => {
     //A promise can only emit a single value
    resolve("Test Promise - 1");
    resolve("Test Promise - 2");  // This will not execute.
})
getData(1).then(data => {
    console.log(data);
}, error => {
    console.log(error);
});

import { Observable } from 'rxjs';
const getDataOb = new Observable( (observer) => {
  // An observables can emit any number of values.
  observer.next("Test observable -1");
  observer.next("Test observable -2");
}) 
getDataOb.subscribe( (result) => console.log(result) );
```

```javascript
const promise = new Promise(resolve => {
    resolve(Math.random());
});

// Value is same from promise. - Multicast
promise.then(result => console.log("P : " + result));
promise.then(result => console.log("P : " + result));


import { Observable } from 'rxjs'
const observable = new Observable(observer => {
    observer.next(Math.random());
});

// Value is different from observable. - Unicast
observable.subscribe(result => console.log("O : " + result));
observable.subscribe(result => console.log("O : " +result));

```


------------



**Async/Await**

Async/await has been introduced in ES8 (2017). This technique should really be listed under promises, because it is just syntactic sugar for working with promises. However, it is a syntactic sugar that is really worth looking at.

Basically, you can declare a function to be async, which allows you to use the await keyword in the body of this function. The await keyword can be put in front of an expression that evaluates to a promise. The await keyword pauses the execution of the async function until the promise is resolved. When this happens, the entire await expression evaluates to the result value of the promise, and then the execution of the async function resumes.

Furthermore, the async function itself returns a promise as well that is resolved when the execution of the function body completes.

Let's see how this looks like in practice with the following example:

```javascript
function asyncTask(i) {
    return new Promise(resolve => resolve(i + 1));
}
async function runAsyncTasks() {
    const res1 = await asyncTask(0);
    const res2 = await asyncTask(res1);
    const res3 = await asyncTask(res2);
    return "Everything done"
}
runAsyncTasks().then(result => console.log(result));
```
