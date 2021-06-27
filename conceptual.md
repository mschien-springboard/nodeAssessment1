### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  using aync functions, promises, tools like axios for requests and also express similarly

- What is a Promise?
  A js promise is an async operation that will eventually return an object. the name implies that there will some guarantee of returned values.

- What are the differences between an async function and a regular function?
  async function will wait to resolve before moving to the next line in a js file. normal functions will run in the background while the script continues.

- What is the difference between Node.js and Express.js?
  node is a framework for building apps in JS, uses npm package control for dependancies, etc. Express is middleware that handles back end functions that routing and req/res cycle.

- What is the error-first callback pattern?
  this is when a function in node uses err in the callback as the first option and results after, essentially a style for error handling.

- What is middleware?
  functionality that runs in the middle of the request / result cycle. The error handler we use in every express app is an example.

- What does the `next` function do?
  passes the request to the next function in an node app, this can also pass errors generated on to the next functions that handle errors 

- What does `RETURNING` do in SQL? When would you use it?
  Returns the new data that is present in the database after sending a query, useful when trying to return the changes made by a database update or addition to show as json

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
Redundant api url usage, doesn't return promises at same time, could also use an array of users instead and loop through creating promises but depends on how users are passed in.

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
- Improved:
```js
async function getUsers() {
  const API_URI = 'https://api.github.com/users';
  const elie = $.getJSON(`${API_URI}/elie`);
  const joel = $.getJSON(`${API_URI}/joelburton`);
  const matt = $.getJSON(`${API_URI}/mmmaaatttttt`);

  return await Promise.all([elie,joel,matt]);
}
```

NOTES:
Time taken 3 hours.