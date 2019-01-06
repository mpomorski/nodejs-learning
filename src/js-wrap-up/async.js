// callback hell
const fetchData = callback => {
  setTimeout(() => {
    callback('Data fetched!');
  }, 1500);
};

setTimeout(() => {
  console.log('Timer is done!');
  fetchData(text => {
    console.log(text);
  });
}, 2000);

console.log('Hello!');

// using Promises
const fetchPromise = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data promise resolved');
    }, 1500);
  });
  return promise;
};

// easy to chain
fetchPromise()
  .then(text => {
    console.log(text);
    return fetchPromise();
  })
  .then(text => console.log(text));
