const fetch = require("node-fetch");

function getTodo(id) {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

      throw new Error(res.statusText);
    })
    .catch((err) => console.error(err));
}

////////////////////////////
// Usage via promises
////////////////////////////
getTodo(2)
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
