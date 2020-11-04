#### nodejs(v10) Async and Await example

```
async function processData(a,b,c){
  console.log('Start Processing!');
  const result = await getSum(a,b,c);
  console.log('result --> ' + result);
  console.log('End Processing!');
}

function getSum(a,b,c){
  return new Promise((resolve, reject) => {
    setTimeout( () => {
      resolve(a+b+c);
    }, 2000)
  })
}

processData(1,2,3);
```
=============================================================

```
const delay = (sec) => new Promise( (resolve) => {
  console.log('Preparing for data!');
  setTimeout(resolve, sec*1000)
})

const getData = async(test) => {
  console.log(test);
  await delay(2);
  return Promise.resolve('Data is received.');
}

getData('Give me data!').then( (a) => {
  console.log(a);
});

```


